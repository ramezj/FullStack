"use client"
import React, { useState, useEffect } from 'react';
import EmailInput from '@/components/auth/EmailInput';
import SubmitData from '@/components/auth/SubmitData';
import PasswordInput from '@/components/auth/PasswordInput';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from "next/link"

export default function Login() {
    const { push } = useRouter();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":"true",
            },
            body: JSON.stringify({
                email: email,
                password:password
            })
        })
        const res = await resp.json();
        if(res.ok == true) {
          push('/dashboard')
        }
        setData(res);
    }

  return (
    <div className='bg-[url("/10.jpg")] h-full min-h-screen bg-bottom bg-no-repeat w-full'>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
            <Link href="/register" className='text-indigo-700 font-bold'>Sign Up Instead?</Link>
            <br /><br />
              <SubmitData value="Login" onClick={handleSubmit} />
            </div>
          </form>
        </div>
        {JSON.stringify(data)}
      </div>
      </div>
  )
}
