"use client"
import React, { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import LogOut from './Logout';

export default function Navbar() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(() => {
      const checkUser = async () => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/app`, {
          method: 'GET',
          credentials: 'include',
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials":"true",
          }
      }) 
        const response = await resp.json();
        if(response. ok == true) setIsLoggedIn(true);
        if(response.ok == false) setIsLoggedIn(false);
      }
      checkUser();
    })
    return (
        <>
        <div className="navbar bg-transparent">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost normal-case text-xl font-extrabold text-white italic"><b className="font-bolder">⚡ Super</b>Feedback</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      {
        isLoggedIn === undefined
        ? 
        <>
        <Dashboard />
        </>
        : 
        <>
        <div className="flex gap-1.5 mt-3">
          {
            isLoggedIn 

            ? <>
              <Dashboard />
              </>
            : <><Login /></>
          }
        </div>
        </>
      }
    </div>
  </div>
</div>
        </>
    )
}