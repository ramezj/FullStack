import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
  <div className='bg-[url("/6.jpg")] h-full min-h-screen bg-center bg-no-repeat w-full'>
   <Navbar />
   </div>
  )
}
