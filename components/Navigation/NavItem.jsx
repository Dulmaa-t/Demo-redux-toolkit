import Link from "next/link";

const NavItem = (props) => {
    return (
        <li
            onClick={props.btn ? props.popup : () => { }}
            className={`font-[500] text-base xl:text-[20px] cursor-pointer navIt w-max py-3 ${props.active ? "text-black" : "text-[#666]"} font-noto ${props.raceBtn ? "bg-gradient-to-r from-[#FE8243] via-[#FF5675] to-[#FE25D5] text-white naBt px-6 xl:mx-2 rounded-full" : props.login ? "flex items-center ml-4 gap-4" : ""} flex items-center ${props.btn ? "bg-black text-white naBt px-6 xl:mx-2 rounded-full" : props.login ? "flex items-center ml-4 gap-4" : ""}`}>
            {props.btn ? (
                <p>{props.title}</p>
            ) : (
                // <Link passHref href={props.login ? "/" : props.link}>
                //     {props.title}
                // </Link>
                <p onClick={props.redirect}>{props.title}</p>
            )}
        </li>
    )
}

export default NavItem;