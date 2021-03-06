import Image from "next/image";

const Hero = () => {
  return (
    <div
      className='container pt-[100px] pb-10 lg:pt-[140px] lg:py-16'
      name='about'
      id='about'
    >
      <div className='w-full px-[16px] lg:px-0 sm:w-11/12 md:w-11/12 lg:w-9/12 mx-auto sm:flex items-center'>
        <div className='flex-[0.5] lg:flex-[0.4]'>
          <div className='w-[75%] pb-[calc(75%_-_30px)] sm:w-[100%]  sm:pb-[calc(100%_-_30px)] relative overflow-hidden border-[16px] border-[#444444] rounded-full shadow-[0_0_25px_0_rgba(0,0,0,.8)] mx-auto mb-8 sm:mb-0'>
            <Image
              layout='fill'
              src='/anujkamboj.jpg'
              objectFit='cover'
              className='scale-125 -translate-y-4'
              alt='anuj-kamboj'
              priority
            />
          </div>
        </div>
        <div className='flex-[0.7] lg:flex-[.7] sm:pl-[40px] md:pl-[60px] text-center sm:text-left'>
          <h2 className='text-sub_heading_dark text-base mb-[5px] sm:mb-[10px]'>
            Web Developer
          </h2>
          <h1 className='font-semibold text-4xl lg:text-5xl text-heading_dark mb-[25px] lg:mb-8'>
            Anuj Kamboj
          </h1>
          <p className='text-base_dark leading-7 text-center sm:text-left'>
            I&apos;m Developer with over 4 years of experience. I build
            interactive websites that run across platforms & devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
