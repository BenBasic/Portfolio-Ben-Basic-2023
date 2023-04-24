import LandingHero from '@/components/LandingHero'
import MainContainer from '@/components/MainContainer'
import AboutContent from '@/components/content/AboutContent'
import SkillsContent from '@/components/content/SkillsContent'
import ProjectsContent from '@/components/content/ProjectsContent'
import ContactContent from '@/components/content/ContactContent'

export default function Home() {
  return (
    <main className="min-h-screen mx-auto overflow-x-hidden max-w-7xl">

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
        <a href='#top'>
          <button className="justify-center px-4 py-2 mt-4 text-center transition-colors duration-75 bg-retrowarm-100 hover:bg-retrowarm-50 rounded-3xl">
            <span className="text-xl font-heading text-newwhite">
              Back to top
            </span>
          </button>
        </a>
      </div>


      {/* Screen edge colors to display on larger monitors */}

      <div className='fixed top-0 left-0 invisible w-20 h-full bg-retroradcool-50 2xl:visible desktoplg:w-60' />
      <div className='fixed top-0 invisible w-20 h-full bg-retroradcool-100 left-20 desktoplg:left-60 2xl:visible desktoplg:w-60' />

      <div className='fixed top-0 right-0 invisible w-20 h-full bg-retroradcool-50 2xl:visible desktoplg:w-60' />
      <div className='fixed top-0 invisible w-20 h-full bg-retroradcool-100 right-20 desktoplg:right-60 2xl:visible desktoplg:w-60' />

    </main>
  )
}
