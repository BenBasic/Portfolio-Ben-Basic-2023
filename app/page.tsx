import LandingHero from '@/components/LandingHero'
import MainContainer from '@/components/MainContainer'
import AboutContent from '@/components/content/AboutContent'
import SkillsContent from '@/components/content/SkillsContent'
import ProjectsContent from '@/components/content/ProjectsContent'

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
        connectBottom={false}
      />

    </main>
  )
}
