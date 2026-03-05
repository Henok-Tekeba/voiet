import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import ValueProps from './components/sections/ValueProps'
import AudioDemo from './components/sections/AudioDemo'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
export default function Home() {
  return (
    <main className="bg-bg-base min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <ValueProps />
      <ValueProps/>
      <AudioDemo />
      <CTA />
      <Footer/>
    </main>
  )
}