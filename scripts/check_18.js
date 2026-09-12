import fs from 'fs';

const enContent = fs.readFileSync('./src/i18n/en.ts', 'utf8');
const hiContent = fs.readFileSync('./src/i18n/hi.ts', 'utf8');
const paContent = fs.readFileSync('./src/i18n/pa.ts', 'utf8');

const enKeys = new Set([...enContent.matchAll(/['"]([a-zA-Z0-9_\.]+)['"]\s*:/g)].map(m => m[1]));
const paKeys = new Set([...paContent.matchAll(/['"]([a-zA-Z0-9_\.]+)['"]\s*:/g)].map(m => m[1]));

const missing = [];
for (const k of enKeys) {
  if (!paKeys.has(k)) {
    const escaped = k.replace(/\./g, '\\.');
    const enRegex = new RegExp(`['"]${escaped}['"]\\s*:\\s*['"]([^'"]*)['"]`);
    const hiRegex = new RegExp(`['"]${escaped}['"]\\s*:\\s*['"]([^'"]*)['"]`);
    const enVal = enContent.match(enRegex);
    const hiVal = hiContent.match(hiRegex);
    missing.push({ key: k, en: enVal ? enVal[1] : '', hi: hiVal ? hiVal[1] : '' });
  }
}
console.log('Missing count:', missing.length);
console.log(JSON.stringify(missing, null, 2));
