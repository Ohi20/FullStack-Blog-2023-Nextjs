import React from 'react';
import Image from 'next/image';
import Hero from 'public/hero.png';
import Button from '@/src/components/button/Button';

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 p-10">
        <h1 className="text-5xl my-6">
          <span className="text-[#53c28b] font-bold">Share</span> Your Works
        </h1>
        <p className="text-3xl font-light">
          Turning your Idea into Reality. We bring together to the global tech
          industry.
        </p>

        <div className="flex justify-evenly gap-4 my-8">
          <Button url="/blog" text="See Our Blogs" />
          <Button url="/portfolio" text="See Our Works" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 animate-bounce duration-75">
        <Image
          src={Hero}
          alt="hero"
          className="object-cover h-auto w-auto mt-10"
        />
      </div>
    </div>
  );
};

export default HomePage;
