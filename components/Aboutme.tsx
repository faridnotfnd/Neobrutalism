import React, { useEffect } from "react";
import Marquee from "@/components/marquee";

const items = ["Welcome to Farid Sidik's Portfolio | Software Engineering Student and Technology Enthusiast"];

const Aboutme: React.FC = () => {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <section id="About">
      <div>
        <Marquee items={items} />
      </div>
      <div className="flex max-w-full px-10 py-20 sm:py-12 sm:px-6 lg:py-16 lg:px-40 mb-20 xl:mb-0 text-center xl:text-left">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 m-auto">
          <div className="overflow-hidden flex ml-0 md:ml-36 xl:justify-end transition hover:shadow-none sm:h-full lg:order-last lg:h-full">
            <dotlottie-player
              src="https://lottie.host/0ba8f402-9ac5-48d2-aea7-4a9c34e14915/aTEe1YyGXI.json"
              background="transparent"
              speed={1}
              style={{ width: "450px", height: "450px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="lg:py-24">
            <h2 className="text-4xl font-bold text-black sm:text-6xl heading_font">
              About Myself
            </h2>
            <p className="mt-14 text-gray-600 text-2xl mb-16">
              ✨ I'm a student at SMKN 1 Banjar, majoring in Software
              Engineering. Passionate about technology, I explore programming,
              software development, and problem-solving.
            </p>
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