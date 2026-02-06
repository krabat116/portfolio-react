export default function HobbiesSection() {
  return (
    <section className="mt-10">
      <div className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          {/* <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/5 text-lg">
            🎯
          </div> */}
          <h2 className="text-lg font-semibold">Hobbies</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Surfing */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">🏄‍♂️</span>
              <h3 className="font-semibold">Surfing</h3>
            </div>
            <p className="text-sm leading-relaxed text-black/75">
              Helps me stay comfortable with uncertainty and adapt quickly to
              changing conditions—similar to working in dynamic development
              environments.
            </p>
          </div>

          {/* Swimming */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">🏊‍♂️</span>
              <h3 className="font-semibold">Swimming</h3>
            </div>
            <p className="text-sm leading-relaxed text-black/75">
              Builds endurance and consistency, reinforcing the discipline
              needed for long problem-solving sessions and steady skill growth.
            </p>
          </div>

          {/* Chess */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">♟️</span>
              <h3 className="font-semibold">Chess</h3>
            </div>
            <p className="text-sm leading-relaxed text-black/75">
              Sharpens strategic thinking and patience, skills I apply when
              breaking down complex problems and planning software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
