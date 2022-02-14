import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: false,
  // Optional parameters
  slidesPerView: 1,
  speed: 500,
  direction: "horizontal",
  breakpoints: {
    "@0.40": {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const slideData = [
  {
    title: "Agency",
    madeWith: "Wordpress",
    url: "#",
  },
  {
    title: "Portfolio",
    madeWith: "Wordpress",
    url: "#",
  },
  {
    title: "Restaurant",
    madeWith: "Wordpress",
    url: "#",
  },
  {
    title: "Portfolio",
    madeWith: "Wordpress",
    url: "#",
  },
  {
    title: "Agency",
    madeWith: "Wordpress",
    url: "#",
  },
];
const Projects = () => {
  return (
    <div className='container mx-auto py-10 lg:py-14' name='project'>
      <div className='flex items-start  justify-between  relative'>
        <h2 className='section__heading'>Projects</h2>
        <div className='flex gap-x-4 lg:gap-x-6 mt-1'>
          <span className='h-[40px] w-[40px] rounded-full bg-cta_dark flex justify-center items-center'>
            <BsArrowLeft className='w-5 h-5 sm:w-6 sm:h-6 text-sub_heading_dark swiper-button-prev cursor-pointer' />
          </span>
          <span className='h-[40px] w-[40px] rounded-full bg-cta_dark flex items-center justify-center'>
            <BsArrowRight className='w-5 h-5 sm:w-6 sm:h-6  text-sub_heading_dark swiper-button-next cursor-pointer' />
          </span>
        </div>
      </div>
      <div className='swiper w-full'>
        <div className='swiper-wrapper'>
          {slideData.map((data, index) => {
            const { title, url } = data;
            return (
              <div className='swiper-slide' key={index}>
                <div className='h-[200px] lg:h-[240px] w-full rounded-md bg-cta_dark relative'>
                  <Image
                    layout='fill'
                    src='/placeholder.png'
                    alt='portfolio'
                    objectFit='cover'
                  />
                </div>

                <div className='px-2 py-4 space-y-1.5'>
                  <h1 className='space-x-1 flex items-center'>
                    <span className='font-semibold text-xl text-primary'>
                      {title}
                    </span>
                  </h1>
                  <a
                    href={url}
                    className='text-base_dark text-sm flex items-center gap-x-1.5'
                  >
                    View Site <BsArrowRight className='w-5 h-5' />
                  </a>
                </div>
              </div>
            );
          })}
          <div className='swiper-scrollbar'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
