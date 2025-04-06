import { Rating } from "flowbite-react";
import React from "react";
import ProductCard from "./productcard";

const productData = [
    {
        id: "Ps-01",
        img: "/img1.jpg",
        Catagory: "Jogger",
        Desc: "No Sweat Jogger Black",
        rating: 4.3,
        price: 17,
    },
    {
        id: "Ps-02",
        img: "/img2.jpg",
        Catagory: "Pant",
        Desc: "NuStretch Performance Trouser Slim Charcoal",
        rating: 4.2,
        price: 18,
    },
    {
        id: "Ps-03",
        img: "/img3.jpg",
        Catagory: "Pant",
        Desc: "Adventure Pant Charcoal",
        rating: 4.5,
        price: 20,
    },
    {
        id: "Js-01",
        img: "/img4.jpg",
        Catagory: "Jeans",
        Desc: "Performance Denim Relaxed Taper Galactic",
        rating: 4.6,
        price: 27,
    },
    {
        id: "Js-02",
        img: "/img5.jpg",
        Catagory: "Jeans",
        Desc: "Performance Denim PLUS Straight Carbon Stone",
        rating: 5,
        price: 30,
    },
    {
        id: "Js-03",
        img: "/img6.jpg",
        Catagory: "Jeans",
        Desc: "Performance Denim Athletic Straight Horizon",
        rating: 4.2,
        price: 26,
    },
    {
        id: "Ts-01",
        img: "/img7.jpg",
        Catagory: "T-shirt",
        Desc: "Camping Natural T-shirt",
        rating: 4.1,
        price: 12,
    },
    {
        id: "Ts-02",
        img: "/img8.jpg",
        Catagory: "T-shirt",
        Desc: "Parental Advisory Light Greymarlecopy T-shirt",
        rating: 3,
        price: 11,
    },
];

const Product = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Top Products</h2>
            <div
                className="grid grid-cols-1 place-items-center sm:place-items-start
                sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
            >
                {productData.map((item) => (
                    <ProductCard
                        key={item.id} // Use unique `id` instead of `index`
                        img={item.img}
                        rating={item.rating}
                        price={item.price}
                        desc={item.Desc} // Ensure `ProductCard` expects `desc`
                        id={""} 
                        category={""}                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
