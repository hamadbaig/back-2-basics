import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-white border-b-4 border-black overflow-x-hidden">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Our Partners & Recognition
      </h2>
      <Slider {...settings} className="px-4 max-w-full">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/partner1.jpg"
              alt="Technology Partner"
              width={120}
              height={120}
              className="object-contain h-[200px]"
            />
            <p className="mt-4 text-center text-sm">Technology Partner</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/partner2.jpg"
              alt="Incubating Partner"
              width={120}
              height={120}
              className="object-contain h-[200px]"
            />
            <p className="mt-4 text-center text-sm">Incubating Partner</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/partner3.jpg"
              alt="Lab & Testing Partner"
              width={120}
              height={120}
              className="object-contain h-[200px]"
            />
            <p className="mt-4 text-center text-sm">Lab & Testing Partner</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/partner4.png"
              alt="PR & Media Partner"
              width={120}
              height={120}
              className="object-contain h-[200px]"
            />
            <p className="mt-4 text-center text-sm">PR & Media Partner</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/partner5.jpg"
              alt="Start Up India - GOI"
              width={120}
              height={120}
              className="object-contain h-[200px]"
            />
            <p className="mt-4 text-center text-sm">Start Up India - GOI</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
