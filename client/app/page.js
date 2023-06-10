"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Heading from "@/components/Heading"
import { motion } from "framer-motion"
import Widget from '@/components/Widget'

export default function Home() {
  return (
  <motion.div 
      initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}
  className='bg-[url("/abstract.jpg")] h-full min-h-screen bg-cover bg-no-repeat w-full'>
   <Navbar />
   <br />
   <div className="items-center content-center">
    <center>
      <br />
      <div>
        <Heading />
      </div>
      {/* <Widget backgroundColor='red-200'/> */}
    </center>
   </div>
   </motion.div>
  )
}
