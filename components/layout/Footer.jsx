import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import naverblog from "../../public/naverblog.png";
import instagram from "../../public/instagram.svg";

const Footer = ({ }) => {
    return (
        <footer className="w-full mt-8 bg-white border-t py-10">
            <div className="w-full px-12 flex lg:flex-row justify-between flex-col items-center lg:items-start 2xl:text-base">
                <div className="flex flex-2/3 w-full">
                    <div className="w-full">
                        <div className="flex my-2">
                            <p className="font-bold text-sm md:text-base lg:text-xs xl:text-sm">저작권 블록체인, 저작권 이용허락 거래 NFT 플랫폼, 탐탐(TAMTAM)</p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-between w-full">
                            <ul className="flex gap-4 font-noto text-sm md:text-base lg:text-xs xl:text-base">
                                <li>이용약관</li>
                                <li>개인정보처리방침</li>
                                <li>공지사항</li>
                            </ul>
                            <div className="hidden mt-6 lg:m-0 text-2xl items-center xl:flex gap-8 text-[#6d6d6d]">
                                <Link href="/" passHref>
                                    <div className="flex items-center">
                                        <Image src={instagram} alt="login" height={24} width={30} />
                                    </div>
                                </Link>
                                <Link href="/" passHref>
                                    <div className="flex items-center">
                                        <Image src={naverblog} alt="login" height={24} width={30} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex items-center my-2">
                            <p className="text-sm md:text-base lg:text-xs xl:text-sm">TAMTAM의 원활한 서비스 제공을 위해 Chrome 브라우저 사용을 권장합니다. (Internet Explorer 등 메타마스크를 지원하지 않는 브라우저에서는 TAMTAM 서비스 이용이 불가능합니다)</p>
                        </div>
                        <div className="w-full flex text-center lg:text-left  mb-3 flex-col text-black lg:items-start xl:flex-row font-noto items-center text-sm md:text-base lg:text-xs xl:text-sm lg:gap-3">
                            <h1 className="font-[300] mb-1 lg:m-0">EYES Protocol / 엘에스웨어(주)</h1>
                            <p className="font-[300] leading-4">대표자명 : 김민수</p>
                            <p className="font-[300] leading-4">서울특별시 금천구 서부샛길 606(가산동 543-1) 대성디폴리스A동 18층</p>
                            {/* <div className="flex font-noto items-center text-black text-base md:text-base lg:text-xs xl:text-sm 2xl:text-base gap-3"> */}
                            <p className="font-[300] leading-4">Tel : 02-6919-0322</p>
                            <p className="font-[300] leading-4">Fax : 02-6919-0329</p>
                            <p className="font-[300] leading-4">사업자등록번호 : 113-81-96801</p>
                            {/* </div> */}
                        </div>
                        <div className="flex items-center justify-center lg:justify-between w-full">
                            <p className="text-sm font-open text-[#6e6e6e] font-[200] md:text-base">
                                Copyright EYES Protocol All rights reserved
                            </p>
                            <div className="hidden mt-6 lg:m-0 text-2xl items-center lg:flex xl:hidden gap-8 text-[#6d6d6d]">
                                <Link href="https://www.instagram.com/tamtam_artncity/" passHref>
                                    <div className="flex items-center">
                                        <Image src={naverblog} alt="login" height={24} width={30} />
                                    </div>
                                </Link>
                                <Link href="https://blog.naver.com/tamtam_art" passHref>
                                    <div className="flex items-center">
                                        <Image src={naverblog} alt="login" height={24} width={30} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-6 lg:m-0 text-2xl items-center lg:hidden gap-8 text-[#6d6d6d]">

                </div>
            </div>
        </footer>
    )
}

export default Footer;