import { useState, useEffect } from "react";
import {
    AiOutlineLike,
    AiOutlineHeart,
    AiFillLike,
    AiFillHeart,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import star from "../../public/star.png";
import pink from "../../public/pink.png";
import def from "../../public/no_photo.png";
import { FaWonSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import maticLogo from "../../public/matic-logo.png";
import art from "../../public/art1.jpg";
import user from "../../public/def_pro.png";
import {
    likeArtWork,
    unlikeArtWork,
    heartArtWork,
    unheartArtWork
} from "../../redux/feature/artworksSlice";

const RecentWork = ({ liked, hearted }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isHearted, setIsHearted] = useState(false);
    const [likeCounting, setLikeCounting] = useState(false);
    const [heartCounting, setHeartCounting] = useState(false);

    const LikeHandler = () => {

    }

    const heartHandler = () => {

    }

    useEffect(() => {
        setIsLiked(liked);
      }, [liked]);

      useEffect(() => {
        setIsHearted(hearted);
      }, [hearted]);
    
    return (
        <div className="w-full flex flex-row container mx-auto py-20">
            <div className="w-[353px] flex flex-col mr-2 rounded-2xl border mx-4">
                <div className="w-full h-2/3">
                    <Image className="border rounded-t-2xl" src={art} alt="art" />
                </div>
                <div className="p-2 md:p-5 flex-1 rounded-b-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4">
                            <h1>WFMU Cat jersey WFMU Cat jersey WFMU Cat</h1>
                        </div>
                        <div className="flex lg:justify-between gap-4 border-b py-1 mb-2">
                            <div className="flex flex-row gap-1">
                                <Image src={maticLogo} alt="maticLogo" width={21} height={21} />
                                <p>0.001</p>
                                <span>MATIC</span>
                            </div>
                            <div className="flex items-center">
                                <FaWonSign />100
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row items-center">
                            <div className="flex flex-row items-center">
                                <div className="border rounded-full bg-slate-600 w-[40px] h-[40px] overflow-hidden justify-center items-center">
                                    <Image className="mx-1 my-2" src={user} alt="user" width={30} height={30} />
                                </div>
                                <Link href={`/`}>
                                    <span className="mx-2">ANDI</span>
                                </Link>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[353px] flex flex-col mr-2 rounded-2xl border mx-4">
                <div className="w-full h-2/3">
                    <Image className="border rounded-t-2xl" src={art} alt="art" />
                </div>
                <div className="p-2 md:p-5 flex-1 rounded-b-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4">
                            <h1>WFMU Cat jersey WFMU Cat jersey WFMU Cat</h1>
                        </div>
                        <div className="flex lg:justify-between gap-4 border-b py-1 mb-2">
                            <div className="flex flex-row gap-1">
                                <Image src={maticLogo} alt="maticLogo" width={21} height={21} />
                                <p>0.001</p>
                                <span>MATIC</span>
                            </div>
                            <div className="flex items-center">
                                <FaWonSign />100
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row items-center">
                            <div className="flex flex-row items-center">
                                <div className="border rounded-full bg-slate-600 w-[40px] h-[40px] overflow-hidden justify-center items-center">
                                    <Image className="mx-1 my-2" src={user} alt="user" width={30} height={30} />
                                </div>
                                <Link href={`/`}>
                                    <span className="mx-2">ANDI</span>
                                </Link>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[353px] flex flex-col mr-2 rounded-2xl border mx-4">
                <div className="w-full h-2/3">
                    <Image className="border rounded-t-2xl" src={art} alt="art" />
                </div>
                <div className="p-2 md:p-5 flex-1 rounded-b-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4">
                            <h1>WFMU Cat jersey WFMU Cat jersey WFMU Cat</h1>
                        </div>
                        <div className="flex lg:justify-between gap-4 border-b py-1 mb-2">
                            <div className="flex flex-row gap-1">
                                <Image src={maticLogo} alt="maticLogo" width={21} height={21} />
                                <p>0.001</p>
                                <span>MATIC</span>
                            </div>
                            <div className="flex items-center">
                                <FaWonSign />100
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row items-center">
                            <div className="flex flex-row items-center">
                                <div className="border rounded-full bg-slate-600 w-[40px] h-[40px] overflow-hidden justify-center items-center">
                                    <Image className="mx-1 my-2" src={user} alt="user" width={30} height={30} />
                                </div>
                                <Link href={`/`}>
                                    <span className="mx-2">ANDI</span>
                                </Link>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div></div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[353px] flex flex-col mr-2 rounded-2xl border mx-4">
                <div className="w-full h-2/3">
                    <Image className="border rounded-t-2xl" src={art} alt="art" />
                </div>
                <div className="p-2 md:p-5 flex-1 rounded-b-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4">
                            <h1>WFMU Cat jersey WFMU Cat jersey WFMU Cat</h1>
                        </div>
                        <div className="flex lg:justify-between gap-4 border-b py-1 mb-2">
                            <div className="flex flex-row gap-1">
                                <Image src={maticLogo} alt="maticLogo" width={21} height={21} />
                                <p>0.001</p>
                                <span>MATIC</span>
                            </div>
                            <div className="flex items-center">
                                <FaWonSign />100
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row items-center">
                            <div className="flex flex-row items-center">
                                <div className="border rounded-full bg-slate-600 w-[40px] h-[40px] overflow-hidden justify-center items-center">
                                    <Image className="mx-1 my-2" src={user} alt="user" width={30} height={30} />
                                </div>
                                <Link href={`/`}>
                                    <span className="mx-2">ANDI</span>
                                </Link>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-row items-center">
                                    <div>{likeCounting}</div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div>{heartCounting}</div>
                                    <p className="text-base font-poppins text-[#555] md:text-base ml-px">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentWork;