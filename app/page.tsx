"use client"; // Menandai file ini sebagai komponen klien

import React, { useEffect, useState } from "react";
import Aboutme from "@/components/Aboutme";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import LINKS from "@/components/links";
import WorkExp from "@/components/WorkExp";

// Daftar warna hex yang bisa Anda ubah
const colors: string[] = [
  "#807dfa", // Violet
  "#fa8543", // Orange
  "#FFE500", // Yellow
  "#53f2fc", // Cyan
  "#7df752", // Lime
  "#fa7fee", // Pink
  "#90EE90", // Light Green
];

// Fungsi untuk mengacak array
function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Home() {
  const [shuffledColors, setShuffledColors] = useState<string[]>([]);

  useEffect(() => {
    // Mengacak warna saat komponen dimuat
    setShuffledColors(shuffleArray([...colors]));
  }, []);

  return (
    <>
      <Navbar />
      <section id="About"></section>
      <section id="Education"></section>
      <div className="text-text dark:text-darkText relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px]">
        <div className="mb-12 mt-0 w-full xl:absolute xl:mb-0 xl:w-[500px]">
          <img
            className="border-border dark:border-darkBorder h-28 w-28 rounded-full border-2 xl:h-[184px] xl:w-[184px]"
            src="/components/images/profile.jpg"
            alt="profile picture"
          />

          <div className="mt-5">
            <h2 className="text-3xl font-heading sm:text-[44px]">
              Farid Sidik
            </h2>
            <p className="mt-5 text-base font-base sm:text-xl">
              Vocational high school student from
              <br />
              SMKN 1 Banjar
            </p>
          </div>
        </div>
        <div className="justify-end xl:flex mt-0">
          <div
            id="grid-container"
            className="text-text dark:text-text grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
          >
            {Object.keys(LINKS).map((key, index) => (
              <a
                className="border-border dark:border-darkBorder border-4 border-black shadow-[4px_4px_0_0_#000] dark:shadow-dark rounded-base border-2 p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                key={key}
                target="_blank"
                href={LINKS[key].link}
                style={{
                  backgroundColor:
                    shuffledColors[index % shuffledColors.length],
                }} // Menggunakan warna acak
              >
                <img
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  src={LINKS[key].icon.src}
                  alt={LINKS[key].title}
                />
                <p className="mt-3 text-lg font-heading sm:text-xl">
                  {LINKS[key].title}
                </p>
                <p className="mt-1 text-sm font-base sm:text-base">
                  {LINKS[key].text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <main>
        <Aboutme />
        <WorkExp />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  );
}