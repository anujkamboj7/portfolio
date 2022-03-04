import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

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

const Projects = ({ projects }) => {
  console.log(projects);
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
          {projects.map((project) => {
            return (
              <div className='swiper-slide' key={project.id}>
                <Link href={project.properties.live_url.url}>
                  <a rel='noopener noreferrer' target='_blank'>
                    <div
                      className={`h-[210px] w-[302px] max-w-full rounded-[6px] relative overflow-hidden bg-cta_dark`}
                    >
                      <Image
                        layout='fill'
                        src={
                          project.properties.thumbnail_small.files[0].file.url
                        }
                        alt='project'
                        objectFit='cover'
                        priority
                      />
                    </div>

                    <div className='px-2 py-4 space-y-1.5 w-[302px] max-w-full'>
                      <h1 className='space-x-1 flex items-center'>
                        <span className='font-medium text-base text-heading_dark'>
                          {project.properties.title.title[0].plain_text}
                        </span>
                      </h1>

                      <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href={project.properties.live_url.url}
                        className='text-primary font-medium text-[15px] flex items-center gap-x-1.5'
                      >
                        View Site
                      </a>
                    </div>
                  </a>
                </Link>
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
