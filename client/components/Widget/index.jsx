import Issue from "./Issue"
import Idea from "./Idea"
import Other from "./Other"
import React, { useState } from "react";

export default function Widget(props) {
    const [ email, setEmail ] = useState();
    const [ description, setDescription ] = useState("");
    const [ loading, setLoading ] = useState();
    const [ response, setResponse ] = useState();
    const submitFeedback = async () => {
        setLoading(true);
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":"true",
            },
            body: JSON.stringify({
                UID:props.UID,
                description:description,
                email:"testEmail"
            })
        })
        const data = await resp.json();
        setResponse(data);
        setLoading(false);
        console.log(resp);
    }   
    return (
    <div class="block max-w-md p-12 bg-white border border-none rounded-xl hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-700 dark:hover:bg-gray-950">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What's on your mind?</h5>
    <br />
    <div className="flex space-x-5 justify-center">
    <Issue />
    <Idea />
    <Other />
    </div>
    <br />
    <textarea
        class="
        bg-gray-50 
        border border-gray-300 
        text-gray-900 
        font-bold
        text-sm rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 
        block w-full p-3.5
        dark:bg-gray-900  
        dark:placeholder-gray-400 
        dark:text-white 
        border-none
        outline-none
        active:outline-none
        focus:outline-none
        active:border-none" 
        placeholder='How can we help?' 
        value={description}
        onChange={((e) => setDescription(e.target.value))}
        rows={3}
        />
        <br />
        <center>
        <span type="button" onClick={submitFeedback}
        class="
        shadow-orange
        normal-case
        border-none
        btn btn-ghost
        justify-center
        space-x-2
        cursor-pointer
        flex 
        text-white 
        bg-gradient-to-br from-[#6a38cf] to-pink-500
        hover:bg-gray-900 
        focus:outline-none 
        focus:ring-4 focus:ring-gray-300 
        font-bold 
        rounded-lg 
        text-sm 
        px-10 py-2.5
        mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        {
            loading 
            ? <><svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg></>
            : 
            <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            </>
        }
        <span>
        Report Feedback
        </span>
        </span>
        {JSON.stringify(response)}
        </center>
    </div>
    )
}