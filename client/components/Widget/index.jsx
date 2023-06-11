import Issue from "./Issue"
import Idea from "./Idea"
import Other from "./Other"

export default function Widget(props) {
    return (
    <div class="block max-w-md p-12 bg-white border border-none rounded-lg shadow hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-700 dark:hover:bg-gray-950">
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
        block w-full p-2.5  
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
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Feedback</button>
    </div>
    )
}