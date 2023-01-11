import Image from "next/image";
import pointer from "../../public/hands.png";
import idea from "../../public/lights.png";
import wallet from "../../public/wallets.png";
import pen from "../../public/pens.png";

const Service = () => {
    return (
        <div className="w-full container mx-auto flex flex-row py-8">
            <div className="flex flex-col gap-4 px-4">
                <div className="flex justify-center">
                    <Image src={pointer} alt="pointer" />
                </div>
                <h1 className="lg:text-[22px] text-center font-[600]">권리등록</h1>
                <p className="text-gray-600 font-[200] text-center">권리를 등록하고 NFT를 발행하여 작품의 소유권 및 저작재산권을 행사할 수 있습니다.</p>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <div className="flex justify-center">
                    <Image src={idea} alt="pointer" />
                </div>
                <h1 className="lg:text-[22px] text-center font-[600]">권리등록</h1>
                <p className="text-gray-600 font-[200] text-center">권리를 등록하고 NFT를 발행하여 작품의 소유권 및 저작재산권을 행사할 수 있습니다.</p>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <div className="flex justify-center">
                    <Image src={wallet} alt="pointer" />
                </div>
                <h1 className="lg:text-[22px] text-center font-[600]">권리등록</h1>
                <p className="text-gray-600 font-[200] text-center">권리를 등록하고 NFT를 발행하여 작품의 소유권 및 저작재산권을 행사할 수 있습니다.</p>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <div className="flex justify-center">
                    <Image src={pen} alt="pointer" />
                </div>
                <h1 className="lg:text-[22px] text-center font-[600]">권리등록</h1>
                <p className="text-gray-600 font-[200] text-center">권리를 등록하고 NFT를 발행하여 작품의 소유권 및 저작재산권을 행사할 수 있습니다.</p>
            </div>
        </div>
    )
}

export default Service;