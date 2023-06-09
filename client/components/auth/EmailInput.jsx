"use client"
export default function EmailInput(props) {
    return (
        <>
        <input
            value={props.value}
             onChange={props.onChange}
             id="email"
             name="email"
             type="email"
             autoComplete="email"
             required
             className="
             border-none
             ring-none
             outline-none
             bg-gray-950
             block w-full 
             font-bold
             rounded-md 
             py-1.5 
             text-white 
             shadow-sm  
             font-bold
             placeholder:text-gray-400 
             sm:text-sm 
             sm:leading-6"
        />
        </>
    )
}