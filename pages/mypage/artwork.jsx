import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import iconCheck from "../../public/icon_check.png";
import { FileUploader } from "react-drag-drop-files";
import imgClick from "../../public/img_click.png";
import upload from "../../public/upload.svg";

const ArtWork = () => {
    const [file, setFile] = useState(null);
    const [fileSizeError, setFileSizeError] = useState(false);
    const fileTypes = ["PNG", "GIF", "JPG"];
    const [img, setImg] = useState(null);
    const [zurag, setZurag] = useState(null);

    const handleFileSizeError = (fileError) => {
        if (fileError) {
            setFileSizeError(true);
            return;
        }
    }

    const handleFileChange = (file) => {
        // console.log("file : ", file);
        setImg(URL.createObjectURL(file));
        setZurag(file);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center mt-11">
            <div className="bg-[#f5f5f5] flex flex-col font-noto p-6 xl:p-11 w-full lg:w-2/5 rounded-xl self-stretch">
                <div className="flex font-bold text-[24px]">
                    <h1>Application for artwork registration (Application for NFT minting)</h1>
                </div>
                <div className="flex items-center mt-2">
                    <div className="mr-2 h-[3px] w-[3px] bg-[#999999]" />
                    <p className="font-light text-[15px] text-[#666666]">
                        File format: JPG, PNG, GIF
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="mr-2 h-[3px] w-[3px] bg-[#999999]" />
                    <p className={`${fileSizeError ? "text-red" : "text-[#666666]"} font-light text-[15px]`}>
                        Max file capacity: 200MB
                    </p>
                </div>
                <div className={`artkworkFileUploader w-full h-[400px] relative flex-1 overflow-hidden rounded-xl font-noto bg-white mt-5 items-center justify-center`}>
                    <FileUploader
                        handleChange={handleFileChange}
                        onSizeError={handleFileSizeError}
                        name="file"
                        types={fileTypes}
                        id="upload"
                        maxSize="1"
                    />
                    {img ? (
                        <div className="absolute w-full h-full top-0 left-0">
                            <Image src={img} alt="" layout="fill" objectFit="contain" />
                        </div>
                    ) : (
                        <div className="relative top-1/2 transform -translate-y-1/2">
                            <div className="relative w-40 h-40 mx-auto">
                                <Image src={imgClick} alt="" layout="fill" objectFit="cover" />
                            </div>
                            <p className="font-light text-[15px] text-center justify-center items-center mt-2 text-[#666666]"> drop a file right here</p>
                        </div>
                    )}

                    {!img && (
                        <div className="absolute bottom-16 left-[50%] -translate-x-[50%]">
                            <div className="flex items-center py-1 px-2 border border-gray-400 text-grey-400">
                                <Image className="flex" src={upload} alt="" />
                                <div className="text-[#999]">upload</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col lg:w-3/5 bg-[#e5e7eb] border rounded-xl p-10">
                <div className="flex flex-col py-2">
                    <div className="flex flex-row gap-1 my-1 text-[18px]">
                        <Image src={iconCheck} alt="icon" />
                        <p className="text-[18px]">Category</p>
                        <span className="text-red-400">(essential)</span>
                    </div>
                    <div>
                        <input className="overflow-auto w-full px-3 focus:outline-none focus:border-[#ff00e4] py-[7px] border rounded-md font-light text-[16px] border-[#cccccc] text-[#000] placeholder-[#aaaaaa]" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex flex-row gap-1 my-1 text-[18px]">
                        <p className="text-[18px]">Nickname</p>
                        <span className="text-red-400"></span>
                    </div>
                    <div>
                        <input className="overflow-auto w-full px-3 focus:outline-none focus:border-[#ff00e4] py-[7px] border rounded-md font-light text-[16px] border-[#cccccc] text-[#000] placeholder-[#aaaaaa]" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex flex-row gap-1 my-1 text-[18px]">
                        <p className="text-[18px]">Title</p>
                        <span className="text-red-400">(essential)</span>
                    </div>
                    <div>
                        <input className="overflow-auto w-full px-3 focus:outline-none focus:border-[#ff00e4] py-[7px] border rounded-md font-light text-[16px] border-[#cccccc] text-[#000] placeholder-[#aaaaaa]" placeholder="Please enter the title of the artwork." />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex flex-row gap-1 my-1 text-[18px]">
                        <p className="text-[18px]">Artwork description</p>
                        <span className="text-red-400">(essential)</span>
                    </div>
                    <div>
                        <input className="overflow-auto w-full px-3 focus:outline-none focus:border-[#ff00e4] py-[7px] border rounded-md font-light text-[16px] border-[#cccccc] text-[#000] placeholder-[#aaaaaa]" placeholder="Please enter the title of the artwork." />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-1 my-1">
                        <p className="text-[18px]">Creator description</p>
                        <span className="text-red-400">(essential)</span>
                    </div>
                    <div>
                        <input className="overflow-auto w-full px-3 focus:outline-none focus:border-[#ff00e4] py-[7px] border rounded-md font-light text-[16px] border-[#cccccc] text-[#000] placeholder-[#aaaaaa]" placeholder="Please enter the title of the artwork." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtWork;