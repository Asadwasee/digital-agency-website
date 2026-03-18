import FinalCTA from '../components/home/FinalCTA'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import Services from '../components/services/Services'

const Home = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 max-w-480 mx-auto space-y-24 pb-24">
      <Hero />
      <Stats />
      {/* Pass the 'limit' prop to Shoaib's Services component */}
      <Services limit={3} />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}

export default Home