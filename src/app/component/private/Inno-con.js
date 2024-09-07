// components/HydroToAnode.jsx

const HydroToAnode = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 text-center bg-white md:p-8">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-black">
        Introducing Hydro-to-Anode® graphite purification
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl">
        Learn more about our sustainable battery materials and high-value
        recycling services, including{" "}
        <span className="font-semibold">Hydro-to-Cathode®</span> direct
        precursor synthesis and{" "}
        <span className="font-semibold">Hydro-to-Anode®</span> graphite recovery
        and purification.
      </p>
      <button className="mt-6 px-6 py-3 text-white bg-lime-500 rounded-full hover:bg-lime-600 transition duration-300">
        Learn More
      </button>
    </section>
  );
};

export default HydroToAnode;
