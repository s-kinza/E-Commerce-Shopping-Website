
"use client";


import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const sliderData = [
        {
            id: 1,
            img: "/images/banner-1.jpg?v=3",  // Try updating cache-busting query parameter
 // Cache-busting query parameter
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 2,
            img: "/images/banner-2.jpg?v=1", // Cache-busting query parameter
            title: "Stylish Bags",
            mainTitle: "TRENDY SUMMER COLLECTION",
            price: "$15",
        },
        {
            id: 3,
            img: "/images/banner-3.jpg?v=1", // Cache-busting query parameter
            title: "Stylish Bags",
            mainTitle: "AUTUMN NEW ARRIVALS",
            price: "$35",
        },
    ];

    return (
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {sliderData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img}        // Correct image path
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
