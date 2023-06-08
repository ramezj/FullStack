"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"
import Feedback from "@/components/dashboard/Feedback";

export default function dashboard() {
    const { push } = useRouter();
    const [ user, setUser ] = useState();
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/app`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true",
                },
            })
            const response = await resp.json();
            if(response.ok == false ) {
                push('/login');
            }
            setUser(response.response);
            console.log(response);
        }
        getData();
    }, [])
    return (
        <div className='bg-[url("/wallpaper.jpg")] h-full min-h-screen bg-cover bg-no-repeat w-full'>
        <Navbar />
        {JSON.stringify(user)}
        <center>
            <Feedback />
        </center>
        </div>
    )
}