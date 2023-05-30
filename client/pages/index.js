import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[url("/6.jpg")] h-full min-h-screen bg-center bg-no-repeat w-full'>
    </div>
  )
}
