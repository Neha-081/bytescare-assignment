import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Topbar />
    </main>
  )
}
