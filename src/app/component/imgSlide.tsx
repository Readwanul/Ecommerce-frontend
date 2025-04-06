"use client";
import React from "react";
import Image from "next/image";

interface ImgProps {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<ImgProps> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="relative outline-none border-none ml-2 mr-2">
            {/* Image */}
            <Image src={img} alt="" className="py-1 w-full h-[490px]" height={2900} width={1400} />

        </div>
    );
};

export default Slide;
