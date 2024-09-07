// components/ServicesSection.jsx

const services = [
  {
    imageSrc: "/innstep1.webp", // Replace with actual image paths
    title:
      "We guide you through every recycling step for optimal convenience, safety and value.",
  },
  {
    imageSrc: "/innstep2.png",
    title: "We take ownership of your materials at the door.",
  },
  {
    imageSrc: "/innstep3.webp",
    title:
      "Rest easy with our rigorous controls, secure monitoring, documented chain of custody and 24-hour security.",
  },
  {
    imageSrc: "/innstep4.webp",
    title:
      "We ensure the secure destruction of R&D materials and proprietary information.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-500 to-blue-800 text-center">
      <h2 className="text-white text-3xl font-semibold mb-4">
        Responsible recycling services pay off
      </h2>
      <p className="text-white text-lg mb-8">
        We don’t simply raise the bar on recycling, we exceed your expectations.
        That’s why major cell and automotive OEMs entrust us with recycling
        contracts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={service.imageSrc}
              alt="Service"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
