import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <main className='tracking-wider'>
      <Navbar />
      <Topbar />
      <Slider />
    </main>
  )
}
