import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
    id: string;
    img: string;
    category: string;
    desc: string;
    rating: number;
    price: number;
}

const generateRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />);
    }
    return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
};

const ProductCard: React.FC<ProductCardProps> = ({ img, desc, rating, price }) => {
    return (
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] shadow-md hover:bg-gray-400 ">
            <div>
                <Image className="w-full h-auto" src={img} width={200} height={300} alt={desc} />
            </div>
            <div className="space-y-2 py-2">
                <h2 className="text-blackish font-normal uppercase">{desc}</h2>
                <div>{generateRating(rating)}</div> {/* Pass rating here */}
                <div className="font-bold flex gap-4">${price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
