import Image from "next/image";
import Link from "next/link";
import art7 from "../../public/art7.jpg";

const Card = ({ }) => {
    return (
        <Link passHref href={`/`}>
            <div className="w-full h-full relative">
                <Image unoptimized priority objectFit="cover" layout="fill" alt="" src={art7} />
                <div className="absolute l-0 b-0">
                    <Link href={`/`}>
                        <h1>fggfhfg</h1>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default Card;
