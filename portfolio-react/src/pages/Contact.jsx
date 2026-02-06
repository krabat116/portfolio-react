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

          <div className="self-start pt-0 pr-2 max-w-xs text-[13px] text-black/80">
            {/* <h2 className="mb-3 text-lg font-semibold">Contact</h2> */}

            <div className="space-y-0 text-sm text-black/80">
              <div className="leading-tight">
                <p className="font-medium text-black/90 ">
                  {' '}
                  <span className="mt-0.5"></span> Location
                </p>
                <p className="text-black/70">Melbourne, Australia</p>
              </div>

              <div className="leading-tight">
                <p className="font-medium text-black/90 mt-3"> Phone</p>
                <p> 0491 891 782</p>
                {/* <a
                    href="tel:0491891782"
                    className="text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                  > */}

                {/* </a> */}
              </div>

              <div className="leading-tight">
                <p className="font-medium text-black/90 mt-3"> Email</p>
                <a
                  href="mailto:krabat116@gmail.com"
                  className="text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  krabat116@gmail.com
                </a>
              </div>

              <div className="leading-tight">
                <p className="font-medium text-black/90 mt-3">
                  <span className="mt-0.5 ">Linkedin</span>
                </p>
                <a
                  href="https://linkedin.com/in/younghoon-jung-314662315"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black break-all "
                >
                  linkedin.com/in/younghoon-jung-314662315
                </a>
              </div>

              <div className="leading-tight">
                <p className="font-medium text-black/90  mt-3">
                  <span className="mt-0.5">Github</span>
                </p>
                <a
                  href="https://github.com/krabat116"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black break-all"
                >
                  github.com/krabat116
                </a>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-xs text-black/60">
              Tip: The form on the right opens your email app with a pre-filled
              message.
            </p>
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
