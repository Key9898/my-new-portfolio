import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_ORIGIN || 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    res.status(200).send('ok')
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { user_name, user_email, message } = req.body || {}
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const service_id = process.env.EMAILJS_SERVICE_ID
  const public_key = process.env.EMAILJS_PUBLIC_KEY
  const private_key = process.env.EMAILJS_PRIVATE_KEY
  const template_contact = process.env.EMAILJS_TEMPLATE_ID_CONTACT
  const template_me = process.env.EMAILJS_TEMPLATE_ID_ME
  if (!service_id || !public_key || !private_key || !template_contact) {
    return res.status(500).json({ error: 'EmailJS env config missing' })
  }

  const template_params = { user_name, user_email, message }

  try {
    const r1 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id,
        template_id: template_contact,
        user_id: public_key,
        accessToken: private_key,
        template_params,
      }),
    })
    const t1 = await r1.text()
    if (!r1.ok) return res.status(r1.status).send(t1)

    if (template_me) {
      const r2 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id,
          template_id: template_me,
          user_id: public_key,
          accessToken: private_key,
          template_params,
        }),
      })
      const t2 = await r2.text()
      if (!r2.ok) return res.status(r2.status).send(t2)
    }

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })
  }
}