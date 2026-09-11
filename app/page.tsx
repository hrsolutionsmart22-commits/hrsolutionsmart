import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import RecruitmentExpertise from '@/components/sections/RecruitmentExpertise'
import HRSolutions from '@/components/sections/HRSolutions'
import Approach from '@/components/sections/Approach'
import Process from '@/components/sections/Process'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import VisionMission from '@/components/sections/VisionMission'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <RecruitmentExpertise />
        <HRSolutions />
        <Approach />
        <Process />
        <WhyChooseUs />
        <VisionMission />
      </main>
      <Footer />
    </>
  )
}