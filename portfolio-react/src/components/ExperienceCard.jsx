export default function ExperienceCard() {
  return (
    <section className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm text-left">
      {/* Title */}
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/5 text-lg">
          💼
        </div>
        <h2 className="text-lg font-semibold">Experience</h2>
      </div>

      {/* Item 1 */}
      <article>
        <h3 className="text-lg font-semibold">IT Support / Customer Support</h3>
        <p className="mt-1 text-sm text-black/60">
          Fuji Xerox Service Centre · 4 years
        </p>

        <p className="mt-3 text-sm leading-relaxed text-black/80">
          Provided technical support for enterprise clients, troubleshooting
          hardware and software issues and managing service requests through a
          ticketing workflow. Communicated clearly with customers (including
          Korean clients) and coordinated resolutions with internal teams to
          ensure reliable outcomes.
        </p>
      </article>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-black/10" />

      {/* Item 2 */}
      <article>
        <h3 className="text-lg font-semibold">
          Production & Inventory Operations
        </h3>
        <p className="mt-1 text-sm text-black/60">
          Shadelite Blinds Wholesale (Part-time) · 3 years
        </p>

        <p className="mt-3 text-sm leading-relaxed text-black/80">
          Worked during semester and holiday periods across the full end-to-end
          blinds production process, supporting inventory receiving and
          stock-handling workflows. Contributed to fabric and aluminium cutting,
          rolling, assembly, packing, and delivery preparation—building strong
          operational discipline, process awareness, and ownership from start to
          finish.
        </p>
      </article>
    </section>
  )
}
