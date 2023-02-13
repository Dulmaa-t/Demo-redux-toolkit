import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import art7 from "../../public/art7.jpg";


const tamtamCreator = () => {
    return (
        <div className="w-full h-full font-open flex flex-col">
            <Link href={`/`} passHref>
                <div className="h-2/3 w-full cursor-pointer relative">
                    <Image src={art7} alt="art7" />
                </div>
            </Link>
            <div className="w-full flex-1 bg-black relative">
                <div className="absolute z-30 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-20 h-20 rounded-full border-[3px] border-white bg-white overflow-hidden">
                    <div className={`w-full relative flex items-end bg-[#333] justify-center h-full text-center text-white`}>
                        <Image unoptimized src={art7} alt="artist" />
                    </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-20 text-center flex flex-col justify-end text-white">
                    <Link href={`/`}>
                        <p className="">dd</p>
                    </Link>
                    <Link href={`/`}>
                        <h1>dd</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default tamtamCreator;