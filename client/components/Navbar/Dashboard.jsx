"use client"
import Link from "next/link"

export default function Dashboard() {
    return (
        <>
        <Link type="button" 
        href="/dashboard"
        class="
        text-white 
        bg-gradient-to-br from-orange-400 to-pink-500
        hover:bg-gray-950 
        focus:outline-none  
        focus:ring-none
        font-bold 
        rounded-lg 
        text-sm 
        px-10 py-3 
        mr-2 mb-2 
        dark:bg-gray-950  
        dark:focus:ring-none 
        dark:border-none"
        >
        Dashboard
        </Link>
        </>
    )
}