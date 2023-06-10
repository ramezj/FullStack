"use client"

import { useEffect } from "react"
import { useRouter } from 'next/navigation';

export default function logout() {
    const { push } = useRouter();
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true",
                },
            })
            const response = await resp.json();
            if(response.ok == true) {
                push('/')
            }
        }
        getData();
    }, [])
    return (
        <>
        </>
    )
}