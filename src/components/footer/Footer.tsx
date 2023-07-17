'use client';
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="h-[50px] text-md flex flex-col lg:flex-row items-center justify-between">
      <div className="dark:text-[#bbb] light:text-black">
        <span className="mr-2 text-[#53c28b]">
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        2023 Qouta. All rights reserved
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/_optimus_11th/" target="_blank">
            <Image
              src="/2.png"
              width={15}
              height={15}
              className="opacity-50 cursor-pointer"
              alt="instagram"
            />
          </Link>
          <Link href="https://www.facebook.com/ashraf.ohi.1/" target="_blank">
            <Image
              src="/1.png"
              width={15}
              height={15}
              className="opacity-50 cursor-pointer"
              alt="facebook"
            />
          </Link>
          <Link
            href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
            target="_blank"
          >
            <Image
              src="/3.png"
              width={15}
              height={15}
              className="opacity-50 cursor-pointer"
              alt="twitter"
            />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            <Image
              src="/4.png"
              width={15}
              height={15}
              className="opacity-50 cursor-pointer"
              alt="youtube"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
