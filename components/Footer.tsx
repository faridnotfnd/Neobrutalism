import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-6">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Copyright © 2024 - All right reserved</p>
      </nav>
    </footer>
  );
};

export default Footer;
