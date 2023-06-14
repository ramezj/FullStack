"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Heading from "@/components/Heading"
import { motion } from "framer-motion"
import Widget from '@/components/Widget'
import Features from '@/components/Features'

export default function Home() {
  return (
  <motion.div 
      initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}
  className='bg-[url("/6.jpg")] h-full min-h-screen bg-center bg-no-repeat w-full'>
   <Navbar />
   <br />
   <div className="items-center content-center">
    <center>
      <br />
      <div>
        <Heading />
      </div>
      <br /><br />
      <Widget/>
      <br /><br />
      {/* <Features /> */}
    </center>
   </div>
   </motion.div>
  )
}
