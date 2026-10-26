/**
 * Front-End Security Policies & Data Sanitizer
 * Filters HTML tags, angle brackets, script markers, and malicious code markers
 * to actively block Cross-Site Scripting (XSS).
 */
export function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip brackets
    .replace(/javascript:/gi, '')
    .replace(/onload/gi, '')
    .replace(/onerror/gi, '')
    .replace(/onclick/gi, '')
    .replace(/onmouseover/gi, '')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .trim();
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Accepts international formats, e.g. +234..., 080..., digits and spaces/hyphens
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return cleaned.length >= 8 && /^\+?[0-9]{8,15}$/.test(cleaned);
}
