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
             block w-full 
             font-bold
             rounded-md 
             border-0 
             py-1.5 
             text-gray-900 
             shadow-sm ring-1 
             ring-inset 
             ring-gray-300 
             placeholder:text-gray-400 
             focus:ring-2 
             focus:ring-inset 
             focus:ring-indigo-600 
             sm:text-sm 
             sm:leading-6"
        />
        </>
    )
}