import Issue from "./Issue"
import Idea from "./Idea"
import Other from "./Other"

export default function Widget(props) {
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
        value={props.value}
        onChange={props.onChange}
        rows={3}
        />
        <br />
        <center>
        <span type="button" 
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        <span>
        Report Feedback
        </span>
        </span>
        </center>
    </div>
    )
}