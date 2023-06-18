"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"
import Feedback from "@/components/dashboard/Feedback";
import Username from "@/components/dashboard/Username";

export default function dashboard() {
    const { push } = useRouter();
    const [ user, setUser ] = useState();
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
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
            setLoading(false);
        }
        getData();
    }, [])
    return (
        <div  className='bg-[url("/10.jpg")] h-full min-h-screen bg-bottom bg-no-repeat w-full'>
        <Navbar />
        <center>
            {
                loading 
                ?   <> loading.. </>
                :   <> <Username username={user.email} /> </>
            }
        </center>
        <center>
            <Feedback />
        </center>
        </div>
    )
}