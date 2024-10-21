import React from "react";

const Aboutme: React.FC = () => {
  return (
    <section id="About">
      <div className="flex max-w-full px-10 py-20 sm:py-12 sm:px-6 lg:py-16 lg:px-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 m-auto">
          <div className="overflow-hidden transition hover:shadow-none sm:h-full lg:order-last lg:h-full">
            <img
              src="/components/images/main.svg"
              alt="thumbnail"
              className="w-full h-full object-cover flex justify-end"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-4xl font-bold text-black sm:text-6xl heading_font">
              About Myself
            </h2>
            <p className="mt-14 text-gray-600 text-2xl">
              ✨ I'm a student at SMKN 1 Banjar, majoring in Software
              Engineering. Passionate about technology, I explore programming,
              software development, and problem-solving.
            </p>
            <p className="mt-14 text-gray-600 text-2xl"></p>
            <p className="mt-14 text-gray-600 text-2xl"></p>
            <a
              href="mailto:fariducer@gmail.com"
              className="justify-center gap-2 rounded-base border-4 border-black bg-[#8bd3dd] px-12 py-4 font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none text-xl"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;