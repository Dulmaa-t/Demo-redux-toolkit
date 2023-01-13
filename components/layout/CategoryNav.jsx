import { useEffect, useState } from "react";

const CategoryNav = () => {
    return (
        <div className="w-full flex justify-between gap-6 items-center">
            <ul className="w-full flex flex-row items-center gap-10 justify-center">
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">All</li>
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">Animation</li>
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">Branding</li>
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">Illustration</li>
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">Mobile</li>
                <li className="lg:text-lg text-gray-500 font-[500] font-noto cursor-pointer">Branding</li>
            </ul>
        </div>
    )
}

export default CategoryNav;