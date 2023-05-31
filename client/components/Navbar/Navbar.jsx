"use client"
import React, { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

export default function Navbar() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(() => {
        const fetchCookie = async () => {
            const cookies = await getCookie('auth');
            if(cookies === undefined || cookies == undefined) {
                setIsLoggedIn(false);
            }
            setIsLoggedIn(true);
        }
        fetchCookie();
    }, [])
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
        <div className="flex gap-3">
        <Register />
        <Login />
        </div>
        </>
      }
    </div>
  </div>
</div>
        </>
    )
}