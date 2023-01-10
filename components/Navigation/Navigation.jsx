import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navigation = (props) => {
    return (
        <>
        <div className="flex-1">
            <ul className="lg:flex py-3 items-center hidden gap-10">
                <NavItem title="Home"/>
                <NavItem title="Market"/>
                <NavItem title="About"/>
                <NavItem title="User Guide"/>
            </ul>
        </div>
        </>
    )
}

export default Navigation;