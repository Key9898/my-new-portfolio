import { useRef, useState } from 'react'

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formEl = formRef.current
        if (!formEl) {
            setIsSubmitting(false)
            return
        }

        const fd = new FormData(formEl)
        const name = String(fd.get('name') || '').trim()
        const email = String(fd.get('email') || '').trim()
        const message = String(fd.get('message') || '').trim()

        if (!name || !email || !message) {
            window.dispatchEvent(new CustomEvent('notify:show', { detail: 'Please fill in all required fields.' }))
            setIsSubmitting(false)
            return
        }

        // Optionally add custom subject for Formspree emails
        fd.append('_subject', `Contact from ${name}`)

        try {
            const response = await fetch('https://formspree.io/f/mldoqwrq', {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' }
            })
            if (response.ok) {
                window.dispatchEvent(new CustomEvent('notify:show', { detail: 'Message sent successfully!' }))
                formEl.reset()
            } else {
                window.dispatchEvent(new CustomEvent('notify:show', { detail: 'Error sending message. Please try again.' }))
            }
        } catch {
            window.dispatchEvent(new CustomEvent('notify:show', { detail: 'An error occurred. Please try again.' }))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-8 lg:py-24 lg:pt-0"
        >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg rounded-lg shadow-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm/6 font-semibold text-white">Name</label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your name"
                                autoComplete="given-name"
                                className="block w-full rounded-lg shadow-xl bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">Email</label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="youremail@example.com"
                                autoComplete="email"
                                className="block w-full rounded-lg shadow-xl bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">Message</label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Please tell me more about your project or inquiry..."
                                rows={4}
                                className="block w-full rounded-lg shadow-xl bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-lg bg-sky-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xl hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                    <span className="sr-only" role="status" aria-live="polite">
                        Ready
                    </span>
                </div>
            </div>
        </form>
    )
}
