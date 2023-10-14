import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Clients from '@/components/Client'
import Platform from '@/components/Platform'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className='tracking-wider'>
      <Navbar />
      <Topbar />
      <Slider />
      <Industries />
      <Services />
      <Clients />
      <Platform />
      <Testimonials />
      <Footer />
    </main>
  )
}
