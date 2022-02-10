import Image from "next/image";

const Hero = () => {
  return (
    <div
      className='container pt-[100px] sm:pt-[120px] pb-10 lg:pt-[150px] lg:py-16'
      name='about'
    >
      <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 mx-auto sm:flex items-center'>
        <div className='flex-[0.5] lg:flex-[0.4]'>
          <div className='w-[75%] pb-[calc(75%_-_30px)] sm:w-[100%]  sm:pb-[calc(100%_-_30px)] relative  overflow-hidden border-[16px] border-[#444444] rounded-full shadow-[0_0_32px_rgba(0,0,0,.4)] mx-auto mb-10 sm:mb-0'>
            <Image
              layout='fill'
              src='/anujkamboj.jpg'
              objectFit='cover'
              className='scale-125 -translate-y-4'
              priority
              alt='anuj-kamboj'
            />
          </div>
        </div>
        <div className='flex-[0.7] lg:flex-[.7] sm:pl-[40px] md:pl-[60px] text-center sm:text-left'>
          <h2 className='text-sub_heading_dark text-base mb-0.5'>
            Web Developer
          </h2>
          <h1 className='font-semibold text-3xl lg:text-5xl text-heading_dark mb-4 lg:mb-8'>
            Anuj Kamboj
          </h1>
          <p className='text-base_dark leading-7'>
            I'm a Developer with over 2 years of experience. I create Web Apps
            &#38; Deliver quality products within specified time limits,
            Ensuring client satisfaction, and have worked under tight timelines
            and stretched beyond normal working hours to ensure timeliness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
