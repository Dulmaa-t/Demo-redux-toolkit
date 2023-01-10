import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileNav = ({ }) => {
    const router = useRouter();
    return (
        <div className={`h-screen ${opened ? "left-0" : "left-full"
            } bg-white w-full fixed top-0 pt-[64px] font-noto z-40 overflow-y-scroll navScrolling transition ease-in-out`}>
            <div className="w-full grid grid-cols-2">
                <div className="h-40 sm:h-48 md:h-64 flex flex-col gap-4 md:gap-6 justify-center items-center border border-r-0 border-b-0">
                    <Link href="/">
                        <div className="relative flex justify-center">
                            <p className="text-[#0b0b0b] text-xl md:text-3xl cursor-pointer">
                                Home
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;