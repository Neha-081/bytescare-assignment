// Import necessary components
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Clients from '@/components/Client'
import Platform from '@/components/Platform'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import RequestDemo from '@/components/RequestDemo'

// Define the Home component, which represents the homepage
export default function Home() {
  return (
    <main className='tracking-wider'>
      {/* Display the navigation bar */}
      <Navbar />

      {/* Display the top bar section */}
      <Topbar />

      {/* Display a slider component */}
      <Slider />

      {/* Display the section about industries served */}
      <Industries />

      {/* Display the services section */}
      <Services />

      {/* Display the clients section */}
      <Clients />

      {/* Display the platforms section */}
      <Platform />

      {/* Display the testimonials section */}
      <Testimonials />

      {/* Display the "Request a Demo" section */}
      <RequestDemo />

      {/* Display the footer component */}
      <Footer />
    </main>
  )
}
