import { useMemo, useState } from 'react'
import Header from '../components/Header'

export default function Contact() {
  const CONTACT_EMAIL = 'krabat116@gmail.com'

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const subject = form.subject?.trim() || 'Portfolio Contact'
    const lines = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      '',
      form.message || '',
    ]
    const body = lines.join('\n')

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }, [form])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Frontend-only option: open user's email client with prefilled content
    window.location.href = mailtoHref
  }

  return (
    <>
      <Header></Header>
      <main className="mx-auto max-w-6xl px-5 py-12">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Contact me</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
            Feel free to reach out—I'd love to connect.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_3fr] items-start">
          {/* Left: Contact info */}
          <div className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/5 text-lg">
                📬
              </div>
              <h2 className="text-lg font-semibold">Contact Info</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-black/90">Location</p>
                <p className="mt-0.5 text-black/60">Melbourne, Australia</p>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div>
                <p className="font-medium text-black/90">Phone</p>
                <p className="mt-0.5 text-black/60">0491 891 782</p>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div>
                <p className="font-medium text-black/90">Email</p>
                <a
                  href="mailto:krabat116@gmail.com"
                  className="mt-0.5 block text-black/60 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  krabat116@gmail.com
                </a>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div>
                <p className="font-medium text-black/90">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/younghoon-jung-314662315"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 block break-all text-black/60 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  linkedin.com/in/younghoon-jung-314662315
                </a>
              </div>

              <div className="h-px w-full bg-black/10" />

              <div>
                <p className="font-medium text-black/90">GitHub</p>
                <a
                  href="https://github.com/krabat116"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 block break-all text-black/60 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  github.com/krabat116
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message form */}
          <div className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Send a message</h2>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              {/* Name + Email (same row on md+) */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-black/85"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-black/85"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-black/85"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g., Front-end role / Collaboration"
                  className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-black/85"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-black/15 bg-white px-3 py-2 text-sm leading-relaxed outline-none focus:border-black/30"
                  required
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 active:bg-black/80"
                >
                  Submit
                </button>

                <p className="mt-2 text-xs text-black/60">
                  This will open your email app with the message pre-filled.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
