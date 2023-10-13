import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Slider from '@/components/Slider'
import GridBox from '@/components/GridBox'
import Industries from './industries'
import Services from '@/components/Services'


export default function Home() {
  return (
    <main className='tracking-wider md:px-28'>
      <Navbar />
      <Topbar />
      <Slider />
      <Industries />
      <Services />
    </main>
  )
}
