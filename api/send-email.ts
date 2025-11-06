import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'
const OWNER_EMAIL = process.env.CONTACT_TO_EMAIL || 'key.w.aung.dev@gmail.com'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_ORIGIN || '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const user_name = String(payload?.user_name || '').trim()
    const user_email = String(payload?.user_email || '').trim()
    const message = String(payload?.message || '').trim()

    if (!user_name || !user_email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'RESEND_API_KEY is not configured' })
    }

    const ownerSubject = `Portfolio contact from ${user_name}`
    const ownerText = `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`

    const replySubject = `Thanks for reaching out, ${user_name}!`
    const replyText =
      `Hi ${user_name},\n\nThanks for your message:\n\n` +
      `${message}\n\nI'll get back to you soon.\n\n— Wunna Aung`

    const [ownerResult, replyResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: ownerSubject,
        text: ownerText,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: user_email,
        subject: replySubject,
        text: replyText,
      }),
    ])

    if (ownerResult.error || replyResult.error) {
      return res.status(502).json({
        error: 'Failed to send one or more emails',
        details: { ownerError: ownerResult.error, replyError: replyResult.error },
      })
    }

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    return res.status(500).json({ error: 'Server error', details: err?.message })
  }
}