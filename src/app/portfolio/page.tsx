import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className="flex flex-col mb-10">
      {/* Title */}
      <div className="flex justify-center items-center my-10">
        <h1 className="text-[#53c28b] text-4xl font-semibold">
          Choose a Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 h-screen w-full">
        <Link
          href="/portfolio/illustrations"
          className="border-[#53c28b] rounded-lg  bg-cover bg-[url('/illustration.jpg')] h-full w-full"
        >
          <span className=" flex justify-center items-center text-5xl text-[#53c28b] font-bold underline decoration-4">
            Illustration
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="border-[#53c28b] rounded-lg bg-cover bg-[url('/websites.jpg')] h-full w-full "
        >
          <span className=" flex justify-center items-center text-5xl text-[#53c28b] font-bold underline decoration-4">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-[#53c28b] rounded-lg  bg-cover bg-[url('/apps.jpg')] h-full w-full "
        >
          <span className=" flex justify-center items-center text-5xl text-[#53c28b] font-bold underline decoration-4">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
