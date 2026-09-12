import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1mb' }));

// Lazy Google GenAI Client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are the SchemeSetu AI Assistant, a transparent, respectful, and multilingual financial-information guide designed to help Indian entrepreneurs understand government schemes, financial calculations, and channel partner recommendations.

CRITICAL OPERATIONAL RULES:
1. AUTHORITY & DECISION BOUNDARY:
- You are NOT the decision engine. The deterministic SchemeSetu engines remain the sole authority for scheme eligibility, suitability scoring, financial calculations, EMI, financing gaps, and partner routing.
- NEVER claim "Your loan is approved", "You are guaranteed to receive this loan", or "This partner will definitely approve you."
- NEVER override or alter any calculated result (eligibility, suitability score, EMI, loan amount, or partner ranking).
- If asked to override or change an engine decision, explain clearly that the result is based on SchemeSetu's deterministic rule and calculation engines based on the user's inputs.
- Clearly distinguish illustrative estimates from official banking sanctions.

2. FINANCIAL SAFETY & AFFORDABILITY:
- When explaining EMI, interest, total repayment, tenure, moratorium, financing gap, or affordability indicators, state clearly that these are illustrative estimates based on the entered parameters.
- Do NOT present the affordability indicator as credit underwriting, approval, or guaranteed repayment ability.

3. SCHEME & PARTNER INFORMATION INTEGRITY:
- Use ONLY the provided scheme, financial, and partner information supplied in the SchemeSetu context.
- Do NOT fabricate government scheme rules, eligibility criteria, interest rates, loan limits, government guarantees, or partner policies. If specific information is not present in the context, state honestly that it is not available in the current prototype.
- Partner capacity, utilization percentages, and risk statuses in the prototype are SIMULATED. You MUST explicitly mention that these are simulated prototype data, not live government or bank telemetry.
- Never claim access to confidential banking NPA or live clearance systems.

4. MULTILINGUAL & TONE:
- You MUST answer in the user's selected language specified in the context (English, Hindi, Punjabi, Bengali, Marathi, Gujarati, Tamil, Telugu, Kannada, or Malayalam).
- Write in a natural, polite, respectful, and professional tone suited for Indian entrepreneurs.
- Preserve standard industry terms and abbreviations when appropriate (such as EMI, MSME, RRB, NBFC, SCA, KVIC, DIC, NPA, DPR). Do not produce awkward literal machine translations for established terms.
- Keep responses concise and structured. For financial questions: explain the result first, then why, then provide the next useful practical step.`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'SchemeSetu API' });
});

// AI Assistant Chat endpoint
app.post('/api/assistant/chat', async (req, res) => {
  try {
    const { message, language = 'en', context, history = [] } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      res.status(400).json({
        success: false,
        error: 'Message is required.'
      });
      return;
    }

    const ai = getGenAI();
    if (!ai) {
      res.status(503).json({
        success: false,
        error: 'AI Assistant is temporarily unavailable. Your SchemeSetu calculations and recommendations are still available.'
      });
      return;
    }

    // Format the prompt with structured contextual metadata
    let contextBlock = `Selected User Language: ${language}\n`;
    if (context) {
      contextBlock += `\n--- ACTIVE SCHEMESETU APPLICATION CONTEXT ---\n`;
      if (context.profile) {
        contextBlock += `BENEFICIARY PROFILE:\n${JSON.stringify(context.profile, null, 2)}\n`;
      }
      if (context.project) {
        contextBlock += `PROJECT DETAILS:\n${JSON.stringify(context.project, null, 2)}\n`;
      }
      if (context.scheme) {
        contextBlock += `SELECTED SCHEME & ELIGIBILITY:\n${JSON.stringify(context.scheme, null, 2)}\n`;
      }
      if (context.financial) {
        contextBlock += `FINANCIAL SIMULATION & EMI:\n${JSON.stringify(context.financial, null, 2)}\n`;
      }
      if (context.partner) {
        contextBlock += `RECOMMENDED CHANNEL PARTNER & ROUTING (NOTE: Capacity/Load is SIMULATED prototype data):\n${JSON.stringify(context.partner, null, 2)}\n`;
      }
      if (context.readiness) {
        contextBlock += `APPLICATION READINESS & DOCUMENTS (PROTOTYPE DEMO CHECKLIST):\n${JSON.stringify(context.readiness, null, 2)}\n`;
      }
      contextBlock += `--- END CONTEXT ---\n`;
    }

    // Build multi-turn contents
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    // Add previous conversation history turns if available (max 8 turns to keep context tight and low-latency)
    const recentHistory = Array.isArray(history) ? history.slice(-8) : [];
    for (const h of recentHistory) {
      if (h && typeof h.content === 'string' && (h.role === 'user' || h.role === 'assistant' || h.role === 'model')) {
        contents.push({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        });
      }
    }

    // Append the current turn with context header
    const userPromptWithContext = `${contextBlock}\nUser Question: ${message.trim()}\n\nRemember to respond strictly in the selected user language (${language}), respect all SchemeSetu decision boundaries, and use the context provided above.`;
    contents.push({
      role: 'user',
      parts: [{ text: userPromptWithContext }]
    });

    // Use gemini-3.6-flash as primary high-performance model, with fallback if transient demand spike occurs
    let responseText = '';
    const candidateModels = ['gemini-3.6-flash', 'gemini-3.8-flash', 'gemini-3.1-pro-preview'];
    let lastError: any = null;

    for (const candidateModel of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: candidateModel,
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.3,
          }
        });
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${candidateModel} failed, trying next candidate:`, err?.message || err);
      }
    }

    if (!responseText && lastError) {
      throw lastError;
    }

    res.json({
      success: true,
      reply: responseText
    });
  } catch (error: any) {
    console.error('Gemini Assistant Error:', error?.message || error);
    res.status(500).json({
      success: false,
      error: error?.message || 'AI Assistant is temporarily unavailable. Your SchemeSetu calculations and recommendations are still available.'
    });
  }
});

// Serve static assets from public/
app.use(express.static(path.join(process.cwd(), 'public')));

// Vite middleware & Static Serving setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SchemeSetu server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
