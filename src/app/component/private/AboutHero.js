// components/About.js
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 bg-white">
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

        {/* Contact Info */}
        <div className="flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10v6a1 1 0 001 1h6l1.293-1.293a1 1 0 01.707-.293h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-.707.293L10 10H4a1 1 0 00-1 1z"
            />
          </svg>
          <span className="text-lg font-bold text-blue-500">+918527862446</span>
        </div>
      </div>
      <div className="w-full md:w-[40%] mb-4 md:mb-0">
        <Image
          width={100}
          height={100}
          src="/cells2.jpg"
          alt="Company Building"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default About;
