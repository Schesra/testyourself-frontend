import React from "react";

const Footer = () => (
  <footer className="text-center text-xs text-gray-500 py-6 px-4 sm:px-6 lg:px-8 select-none bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
      <span>Copyright 2025 Buzzy Buzz (v2.1.1)</span>
      <a href="#" className="hover:underline">
        Terms &amp; conditions
      </a>
      <span>
        Powered by{" "}
        <a href="#" className="text-teal-600 underline hover:text-teal-700">
          buzzy
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
