import { AssistantContext, ChatMessage, ChatResponse } from '../types/assistant';

export async function sendAssistantMessage(
  message: string,
  language: string,
  context?: AssistantContext,
  history: ChatMessage[] = []
): Promise<ChatResponse> {
  try {
    const formattedHistory = history
      .filter(m => !m.error)
      .slice(-8)
      .map(m => ({
        role: m.role,
        content: m.content
      }));

    const res = await fetch('/api/assistant/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        language,
        context,
        history: formattedHistory,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      return {
        success: false,
        error: errorData?.error || 'AI Assistant is temporarily unavailable. Your SchemeSetu calculations and recommendations are still available.',
      };
    }

    const data: ChatResponse = await res.json();
    return data;
  } catch (err: any) {
    return {
      success: false,
      error: 'AI Assistant is temporarily unavailable. Your SchemeSetu calculations and recommendations are still available.',
    };
  }
}
