"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Heading from "@/components/Heading"

export default function Home() {
  return (
  <div className='bg-[url("/bg.jpg")] h-full min-h-screen bg-cover bg-no-repeat w-full'>
   <Navbar />
   <br />
   <div className="items-center content-center">
    <center>
      <br />
      <div>
        <Heading />
      </div>
    </center>
   </div>
   </div>
  )
}
