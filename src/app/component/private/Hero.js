// components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  const images = [
    "/p1.jpg", // Image 1
    "/p2.jpg", // Image 2
    "/p3.jpg", // Image 3
    "/p4.jpg", // Image 4
  ];
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between   text-white mt-4">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className=" flex flex-col justify-center text-left p-6 mb-4 md:pr-[6rem] bg-[#62BC7B] md:h-[70vh] md:w-[65%]"
      >
        <h2 className="text-3xl font-bold mb-4 ">Ascend Elements</h2>
        <p className="mb-4">
          Ascend Elements is an independent manufacturer of advanced battery
          materials using valuable elements reclaimed from spent lithium-ion
          batteries. Our patented <strong>Hydro-to-Cathode®</strong> direct
          precursor synthesis process transforms today’s waste into high-value
          materials for tomorrow’s EV batteries—a giant step up in
          sustainability for the entire industry.
        </p>
        <button className="mt-4 bg-green-900 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 max-w-fit ">
          Learn more about our products
        </button>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-5vw" }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-[100%] md:w-[40%] md:h-[250px] grid grid-cols-2 grid-rows-2 gap-2 bg-white border-10 border-brown"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              width={100}
              height={100}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
