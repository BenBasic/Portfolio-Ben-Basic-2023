import LandingHero from '@/components/LandingHero'
import MainContainer from '@/components/MainContainer'
import AboutContent from '@/components/content/AboutContent'
import SkillsContent from '@/components/content/SkillsContent'
import ProjectsContent from '@/components/content/ProjectsContent'
import ContactContent from '@/components/content/ContactContent'

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl">

      <LandingHero />

      <MainContainer
        content={<AboutContent />}
        title='About Me'
        img='Portfolio2023Headshot'
        connectTop={false}
        connectBottom={true}
      />

      <div className='w-full mx-auto my-32' />

      <MainContainer
        content={<SkillsContent />}
        title='Skills'
        img='Portfolio2023Rubix'
        connectTop={true}
        connectBottom={true}
      />

      <div className='w-full mx-auto my-32' />

      <MainContainer
        content={<ProjectsContent />}
        title='Projects'
        img='Portfolio2023Computer'
        connectTop={true}
        connectBottom={true}
      />

      <div className='w-full mx-auto my-32' />

      <MainContainer
        content={<ContactContent />}
        title='Contact'
        img='Portfolio2023Phone'
        connectTop={true}
        connectBottom={false}
      />

      <div className='w-full px-10 mx-auto mt-10 mb-12 text-center'>
        <button className="justify-center px-4 py-2 mt-4 text-center bg-retrowarm-100 rounded-3xl">
          <span className="text-xl font-heading text-newwhite">
            Back to top
          </span>
        </button>
      </div>



    </main>
  )
}
