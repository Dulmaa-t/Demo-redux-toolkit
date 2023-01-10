import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "../../public/TAMTAM_beta_ci.png";
import Navigation from "../Navigation/Navigation";
import Search from "./Search";

const Header = ({ search }) => {
    return (
        <header className="w-full flex gap-0 lg:gap-6 2xl:gap-16 lg:px-4 2xl:px-4 items-center bg-white">
            <Link href={`/`}>
                <div>
                    <Image alt="desktop-logo" src={whiteLogo} width={255} height={30} />
                </div>
            </Link>
            <Search search={search} />
            <Navigation />
        </header>
    )
}

export default Header;