import React from "react";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div className='container mx-auto'>
      <div className='border-t py-[20px] border-[#555555]/70'>
        <div className='sm:flex text-center sm:text-left items-center justify-between'>
          <div className='space-x-4 text-sm'>
            <a
              href='#'
              className='text-sub_heading_dark hover:text-links_dark transition'
            >
              Twitter
            </a>
            <a
              href='#'
              className='text-sub_heading_dark hover:text-links_dark transition'
            >
              Facebook
            </a>
            <a
              href='#'
              className='text-sub_heading_dark hover:text-links_dark transition'
            >
              Instagram
            </a>
          </div>
          <div>
            <p className='flex justify-center mt-4 sm:mt-0 sm:text-left items-center text-sub_heading_dark text-sm'>
              <BiCopyright className='w-4 h-4 mr-1' /> 2021 Anuj Kamboj
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
