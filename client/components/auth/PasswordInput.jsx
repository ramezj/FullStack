"use client"
export default function PasswordInput(props) {
    return (
        <>
        <input
            value={props.value}
             onChange={props.onChange}
             id="password"
             name="password"
             type="password"
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
             focus:ring-none
             active:border-none 
             active:ring-none
             sm:text-sm 
             sm:leading-6"
        />
        </>
    )
}