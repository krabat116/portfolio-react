export default function EducationCard() {
  return (
    <section className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm">
      {/* Title */}
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/5 text-lg">
          🎓
        </div>
        <h2 className="text-lg font-semibold">Education</h2>
      </div>

      {/* Education 1 */}
      <article className="space-y-2">
        <h3 className="text-lg font-semibold">
          Master of Information Technology
        </h3>
        <p className="text-sm text-black/60">
          Swinburne University · 2023 - 2024
        </p>
        <p className="text-sm text-black/60">Melbourne, Australia</p>
        <p className="text-sm leading-relaxed text-black/80">
          Focused on software development, mobile applications, and cloud
          computing. Completed team-based projects involving React Native,
          system design, and data-driven applications.
        </p>
      </article>

      <div className="my-6 h-px w-full bg-black/10" />

      {/* Education 2 */}
      <article className="space-y-2">
        <h3 className="text-lg font-semibold">Bachelor of Chinese</h3>
        <p className="text-sm text-black/60">
          Beijing Union University · 2007 – 2011
        </p>
        <p className="text-sm text-black/60">Beijing, China</p>
        <p className="text-sm leading-relaxed text-black/80">
          Completed a degree in Chinese language studies, with all coursework
          delivered in Mandarin. Studied Chinese linguistics alongside subjects
          in international trade, economics, and advertising, supported by
          immersive language training.
        </p>
      </article>
    </section>
  )
}
