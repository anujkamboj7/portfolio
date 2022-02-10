import Image from "next/image";
import { useState } from "react";
import { BsTwitter, BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import Overlay from "./Overlay";
const navData = [
  {
    name: "About Me",
    url: "about",
  },
  {
    name: "Services",
    url: "services",
  },
  {
    name: "Projects",
    url: "project",
  },
  {
    name: "Contact",
    url: "contact",
  },
];
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className='fixed  w-full bg-bg_dark z-[10]'>
        {<Overlay active={active} />}
        <div className='container mx-auto'>
          <div className='flex items-center justify-between h-[50px] lg:h-[70px]'>
            <div
              href='/'
              className='cursor-pointer relative block w-[32px] h-[32px] lg:w-[38px] lg:h-[38px]'
            >
              <Image
                src='/logo.svg'
                alt='logo'
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>
            <div className='hidden sm:flex items-center gap-x-[50px]'>
              {navData.map((data, index) => {
                const { name, url } = data;
                return (
                  <Link
                    activeClass='active'
                    to={url}
                    key={index}
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                    className='cursor-pointer inline-block text-links_dark opacity-60 transition font-semibold hover:opacity-100'
                  >
                    {name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation */}

            <div
              className={` ${
                active ? " translate-x-[0%]" : "translate-x-[100%]"
              } sm:hidden flex  w-[80%] justify-between transition ease-in-out duration-300 shadow absolute gap-y-[30px] pl-[30px] pb-[50px] flex-col h-screen top-0 right-0 bg-bg_dark overflow-y-auto z-[1000]`}
            >
              <div className='flex  gap-y-[30px] pb-10 flex-col  bg-bg_dark pt-[100px] sm:gap-x-[50px]'>
                {navData.map((data, index) => {
                  const { name, url } = data;
                  return (
                    <Link
                      activeClass='active'
                      to={url}
                      key={index}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className='cursor-pointer realtive w-max inline-block text-links_dark opacity-60  text-[16px] hover:opacity-100 transition font-semibold'
                    >
                      {name}
                    </Link>
                  );
                })}
                <span
                  className='absolute top-[16px] left-[16px]'
                  onClick={() => setActive(false)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-heading_dark'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </span>
              </div>

              <div>
                <h3 className='text-links_dark opacity-80 font-semibold mb-2'>
                  Social
                </h3>
                <div className='flex gap-[10px]'>
                  <span className='h-[40px] w-[40px] bg-cta_dark flex items-center justify-center rounded-[10px] text-base_dark'>
                    {<BsTwitter className='w-5 h-5' />}
                  </span>
                  <span className='h-[40px] w-[40px] bg-cta_dark flex items-center justify-center rounded-[10px] text-base_dark'>
                    {<BsFacebook className='w-5 h-5' />}
                  </span>
                  <span className='h-[40px] w-[40px] bg-cta_dark flex items-center justify-center rounded-[10px] text-base_dark'>
                    {<BsWhatsapp className='w-5 h-5' />}
                  </span>
                  <span className='h-[40px] w-[40px] bg-cta_dark flex items-center justify-center rounded-[10px] text-base_dark'>
                    {<BsInstagram className='w-5 h-5' />}
                  </span>
                </div>
              </div>
            </div>

            <span className='sm:hidden' onClick={() => setActive(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-heading_dark'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
