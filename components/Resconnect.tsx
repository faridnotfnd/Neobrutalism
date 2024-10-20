"use client"; // Menjadikan ini komponen klien

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Brutalist from "./images/Brutalist.png";
import Brutalist2 from "./images/Brutalist2.png";
import Brutalist3 from "./images/Brutalist3.png";

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
      {/* Shapes with Images */}
        {/* <Image
          src={Brutalist} // Menggunakan gambar Brutalist
        alt="Brutalist Shape 1"
        className="absolute top-10 left-10 w-32 h-32 "
      />
      <Image
        src={Brutalist2} // Menggunakan gambar Brutalist
        alt="Brutalist Shape 2"
        className="absolute bottom-10 right-10 w-48 h-48 "
      />

      <Image
        src={Brutalist3} // Menggunakan gambar Brutalist
        alt="Brutalist Shape 3"
        className="absolute top-[500px] left-1/4 w-24 h-24"
      /> */}
      <style jsx>{`
        .clip-triangle {
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid #d0021b;
        }
      `}</style>
    </section>
  );
};

export default Resconnect;
