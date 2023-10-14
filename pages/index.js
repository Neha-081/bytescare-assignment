import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Clients from '@/components/Client'
import Platform from '@/components/Platform'


export default function Home() {
  return (
    <main className='tracking-wider md:px-28'>
      <Navbar />
      <Topbar />
      <Slider />
      <Industries />
      <Services />
      <Clients />
      <Platform />
    </main>
  )
}
