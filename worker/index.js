const SITE_ORIGIN = 'https://eslaamashraaf.github.io';
const MODEL = 'gemini-3.8-flash';
const PORTFOLIO_CONTEXT = `You are the portfolio assistant for Eslam Ashraf Selim, a Flutter developer and software engineer based in Giza, Egypt. Answer visitor questions using only the facts in this context. If a question is unrelated or asks for facts not listed, say you can only answer from Eslam's portfolio and suggest contacting him. Do not invent experience, results, dates, or links. Keep replies friendly and concise. Answer in the language used by the visitor.

Profile: BSc Computer Science, Software Engineering & IT, NCTU, New Cairo (2020–2024). Flutter Development Diploma at Route Academy. Web Development course at ITI. Arabic native; English B2 professional working proficiency. Available for Flutter and mobile development roles.

Skills: Flutter, Dart, Clean Architecture, MVVM, SOLID, REST APIs, Dio, secure credential storage, Firebase Cloud Messaging, Google Maps, geolocation, Google Sign-In, deep linking, camera/microphone/photo library integration, Android and iOS deployment.

Projects: Farrah now is a social travel and place discovery app with Google Maps, geolocation, Google Sign-In, deep linking, media sharing, and Firebase Cloud Messaging. MV Limousine is a car rental app with standard and VIP rentals, live pricing and tracking. BabyTrack is a baby care app with on-device AI. Foteek is an e-commerce footwear app with product search, brand filters, favorites, cart, and order tracking. RBCS is a medical e-learning app with classes, lessons, mentors, video playback, favorites, and preview/locked access. GoBite is a food delivery app with RTL support.

Open source: auth_logic is a Flutter authentication and token management package published on pub.dev, with login, registration, OTP verification, social login, auto token refresh, retry with backoff, and MVVM + Cubit architecture.

Contact: eslaamashraaf09@gmail.com, +20 100 042 1866. LinkedIn: linkedin.com/in/eslaamashraaf. GitHub: github.com/EslaamAshraaf. Portfolio CV is available for download.`;

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (origin !== SITE_ORIGIN) return new Response('Forbidden', { status: 403 });
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(origin) });
    const url = new URL(request.url);
    if (url.pathname !== '/api/chat' || request.method !== 'POST') return json({ error: 'Not found.' }, 404, origin);
    if (!env.GEMINI_API_KEY) return json({ error: 'Assistant is not configured yet.' }, 503, origin);

    let body;
    try { body = await request.json(); } catch (_) { return json({ error: 'Send a valid JSON request.' }, 400, origin); }
    if (!body || typeof body.message !== 'string') return json({ error: 'A question is required.' }, 400, origin);
    const message = body.message.trim();
    if (!message || message.length > 500) return json({ error: 'Questions must be 1–500 characters.' }, 400, origin);

    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];
    const contents = history.filter(item => item && ['user', 'model'].includes(item.role) && typeof item.text === 'string')
      .map(item => ({ role: item.role, parts: [{ text: item.text.slice(0, 1000) }] }));
    contents.push({ role: 'user', parts: [{ text: message }] });

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: PORTFOLIO_CONTEXT }] },
          contents,
          generationConfig: { maxOutputTokens: 350, temperature: 0.4 }
        })
      });
      const result = await response.json();
      if (!response.ok) return json({ error: response.status === 429 ? 'The assistant is busy. Please try again shortly.' : 'The assistant is temporarily unavailable.' }, response.status === 429 ? 429 : 502, origin);
      const answer = (result.candidates || []).flatMap(candidate => candidate.content && candidate.content.parts || []).map(part => part.text || '').join('').trim();
      if (!answer) return json({ error: 'The assistant could not form an answer. Please try again.' }, 502, origin);
      return json({ answer }, 200, origin);
    } catch (_) {
      return json({ error: 'Could not reach the assistant. Please try again.' }, 502, origin);
    }
  }
};
