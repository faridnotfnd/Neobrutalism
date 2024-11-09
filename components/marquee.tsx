import { useEffect, useRef, useState } from 'react';

export default function Marquee({ items }: { items: string[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Cek apakah tampilan saat ini adalah mobile atau desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px biasanya sebagai breakpoint untuk mobile
    };

    // Panggil checkScreenSize saat pertama kali render
    checkScreenSize();

    // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Update posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update posisi marquee
  useEffect(() => {
    if (marqueeRef.current) {
      const speed = isMobile ? 0.5 : 2.2; // Atur kecepatan berbeda untuk mobile dan desktop
      const initialOffset = isMobile ? window.innerWidth : window.innerWidth; // Ubah menjadi window.innerWidth untuk desktop

      marqueeRef.current.style.transform = `translateX(${initialOffset - scrollPos * speed}px)`;
    }
  }, [scrollPos, isMobile]);

  return (
    <div className="relative flex overflow-x-hidden border-b-4 border-t-4 border-black dark:border-darkBorder bg-[#83d7dd] dark:bg-secondaryBlack text-text dark:text-darkText font-base">
      <div ref={marqueeRef} className="flex whitespace-nowrap py-12">
        {items.map((item) => (
          <span key={item} className="mx-4 text-black text-4xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}