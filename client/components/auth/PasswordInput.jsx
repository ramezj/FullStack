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
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </>
    )
}