// components/QuoteSection.jsx

const QuoteSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-blue-900">
      <div className="border-4 border-lime-400 px-2 py-2  ">
        <div className="border-4 border-lime-400 px-4 py-8 lg:px-12 lg:py-16 text-center max-w-4xl">
          <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed">
            <span className="text-4xl font-bold text-white">“</span>
            What set Ascend Elements apart for us was their technology. The fact
            they can recycle old chemistries, adjust chemical ratios, and
            re-sell materials into the value chain is very attractive. Compared
            to other recyclers, Ascend Elements stood apart.
            <span className="text-4xl font-bold text-white">”</span>
          </blockquote>
          <p className="mt-6 text-lime-400 font-semibold text-lg lg:text-xl">
            Bryan Schultz, VP of Technology, Spiers New Technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
