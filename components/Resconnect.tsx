"use client"; // Menjadikan ini komponen klien

import Link from "next/link";
import React from "react";

const Resconnect = () => {
  return (
    <section
      className="flex h-screen animate__bounceInDown animate__animated bg-[#f2f7f5] border-4 border-black m-4 sm:mx-8 md:mx-10 lg:mx-12 rounded-3xl relative"
      data-svelte-h="svelte-18qt66c"
    >
      <div className="px-10 py-20 md:p-12 lg:px-10 lg:py-10 m-auto">
        <div className="max-w-full text-center">
          <h2
            className="text-4xl font-bold text-black sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl heading_font aos-init aos-animate"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <span>Farid Sidik</span>
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5 my-8 md:my-12">
          <Link
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex z-50 text-black items-center justify-center rounded-[10px] gap-2 border-4 lg:border-4 border-black bg-[#8bd3dd] px-4 py-4 text-lg sm:px-4 sm:py-4 sm:text-sm md:px-12 md:py-6 md:text-2xl lg:px-12 lg:py-6 lg:text-2xl font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none aos-init aos-animate"
            href="https://dub.sh/5nR4Fz6"
          >
            Login
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex text-black items-center justify-center text-center rounded-[10px] gap-2 border-4 lg:border-4 border-black bg-[#faae2b] px-4 py-4 text-lg sm:px-4 sm:py-4 sm:text-sm lg:px-12 lg:py-6 lg:text-2xl font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none aos-init aos-animate"
            href="https://www.linkedin.com/in/rohan-verma-sde/"
          >
            Daftar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resconnect;
