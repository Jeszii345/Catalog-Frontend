import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}

export default HomePage
