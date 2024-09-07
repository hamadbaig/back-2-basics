// components/About.js
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white">
      {/* Image Section */}

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 mb-4">
          With our commitment to foster Circular Economy in the battery value
          chain. our proprietary Closed Loop Re-Mineralised Hydrometallurgy
          process, maximises resource recovery by efficiently extracting
          critical minerals present in spent lithium-ion batteries, namely:
          Lithium, Cobalt, Nickel, Manganese, Copper, Aluminium, Graphite and
          residue materials.
        </p>
        <p className="font-semibold text-gray-800 mb-6">
          Our primary focus is on recycling Lithium-ion batteries using advanced
          Closed Loop Re-Mineralised Hydrometallurgy process to promote
          sustainability and circular economy practices. Our unique method
          enhance resource retrieval, efficient! extracting Lithium, Cobalt,
          Nickel and more with mimium carbon footprint. Our state of the art
          process is Free from any Effluent Discharge and Emission By
          reintegrating recycled materials back Into the manufacturing value
          chain.
        </p>
        <p className="font-semibold text-gray-800 mb-6">
          We close the K loop on batteries, conserving resources and decreasing
          greenhouse gas emissions. Join us in our quest for a cleaner, more
          sustainable future!
        </p>
      </div>
      <div className="w-full md:w-[50%] mb-4 md:mb-0">
        <Image
          width={100}
          height={100}
          src="/th.jfif"
          alt="Company Building"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default About;
