"use client"
import React, { useState, useEffect } from 'react';
import EmailInput from '@/components/auth/EmailInput';
import SubmitData from '@/components/auth/SubmitData';
import PasswordInput from '@/components/auth/PasswordInput';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link'

export default function Register() {
    const { push } = useRouter();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
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
    <div className='bg-[url("/6.jpg")] h-full min-h-screen bg-center bg-no-repeat w-full'>
    <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <center>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
            <div className="flex">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-white">
                  Email Address
                </label>
              </div>
              <div className="mt-2">
                <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div>
              <div className="flex">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
              <Link href="/login" className='text-indigo-700 font-bold float-left'>Sign In Instead?</Link>
              <br /><br />
              <SubmitData value="Register" onClick={handleSubmit} />
            </div>
          </form>
        </div>
        {JSON.stringify(data)}
      </div>
      </center>
      </div>
      </div>
  )
}
