export default function Button(props) {
    return (
        <>
        <a href="#" 
        class="
        inline-flex 
        items-center 
        justify-center 
        px-14 py-3 
        text-base 
        font-bold 
        text-center 
        text-white 
        bg-gray-950 
        rounded-lg 
        shadow-lg
        "
        >
        {props.children}
        </a>
        </>
    )
}