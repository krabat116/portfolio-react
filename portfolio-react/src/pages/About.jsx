import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'
import HobbiesSection from '../components/HobbySection'
import Header from '../components/Header'

export default function About() {
  return (
    <>
      <Header></Header>
      <main className="mx-auto max-w-6xl px-5 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          {/* <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
            A quick snapshot of my experience and education.
          </p> */}
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Experience & Education */}
          <ExperienceCard />
          <EducationCard />
        </section>
        {/* Hobbies */}
        <HobbiesSection />
      </main>
    </>
  )
}
