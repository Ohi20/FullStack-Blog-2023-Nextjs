import React from 'react';
import Image from 'next/image';
import illustration from 'public/illustration.jpg';
import Button from '@/src/components/button/Button';

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <Image
          src={illustration}
          fill={true}
          alt="About Hero"
          className="object-cover sepia"
        />
        <div className="absolute bottom-4 left-4 p-4 bg-[#53c28b] text-white">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#53c28b] text-3xl font-bold">Who Are We?</h1>
          <p className="text-xl font-semibold text-justify">
            We’ve worked as a tech employee for about five years, but our
            experience started way before that. We’ve always been interested in
            writing, storytelling, and helping people tell their stories. When
            we were kids, We did a lot of volunteer works with many tech
            industries and other effective works. The experience taught us how
            important it is to be able to talk with others and listen to their
            stories.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#53c28b] text-3xl font-bold">What We Do?</h1>
          <p className="text-xl font-semibold text-justify">
            Blogs are powerful business tools. They improve conversion rate,
            foster relationships between your business and audience members and
            customers, boost revenue, promote brand awareness, increase your
            ranking on search engines, and positively impact your bottom line.We
            do conversions, a boost in revenue, calls to action, inbound
            marketing, and improving customer relationships.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
