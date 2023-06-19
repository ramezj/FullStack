"use client"
import Image from 'next/image'
import React, { useState, useEffect } from "react";

export default function Feedback() {
    const [ loading, setLoading ] = useState();
    const [ data, setData ] = useState();
        useEffect(() => {
            const getData = async () => {
                setLoading(true);
                const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials":"true",
                    },
                })
                const response = await resp.json();
                setData(response.response.feedbacks);
                setLoading(false);
            }
            getData();
        }, [])
    return (
        <>
        {
                loading 
                ?   <> loading.. </>
                :   <> {JSON.stringify(data)} </>
            }
        </>
    )
}