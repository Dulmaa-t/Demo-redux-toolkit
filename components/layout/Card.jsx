import Image from "next/image";
import Link from "next/link";
const Card = ({isFirst, thumbnail, title, id}) => {
    return (
        <Link passHref href={`/art/preview/${id}`}>
            <div className={`rounded-2xl relative overflow-hidden lg:h-auto shadow-xl cursor-pointer ${isFirst ? "col-start-1 row-start-1 lg:row-end-3 xl:row-end-3 col-end-3 h-64 md:h-96" : "h-36 md:h-64"}`}>
                <Image unoptimized priority objectFit="cover" layout="fill" src={thumbnail} alt={`art`} />
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transWhite to-transBlack text-left flex items-end px-[8%] py-[6%] text-white z-30">
                    <h1 className={`${isFirst ? "text-lg md:text-2xl" : "text-base md:text-lg"} font-[600]`}>
                        <Link href={`/art/preview/${id}`}>{title}</Link>
                    </h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;
