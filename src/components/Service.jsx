import Image from "next/image";

const servicedata = [
  {
    title: "Design",
    img_url: "/pencil-ruler-2-line.svg",
  },
  {
    title: "Ecommerce",
    img_url: "/shop.svg",
  },
  {
    title: "Development",
    img_url: "/display.svg",
  },
  {
    title: "Marketing",
    img_url: "/marketing.svg",
  },
];

const Service = () => {
  return (
    <div className='container mx-auto py-10 lg:py-14' name='services'>
      <h2 className='section__heading'>What I do</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
        {servicedata.map((data) => {
          const { title, img_url } = data;
          return (
            <div
              className='border-2 border-[#444] h-[200px] w-full bg-cta_dark rounded-[10px] flex items-center justify-center flex-col'
              key={title}
            >
              <div className='mb-8 lg:mb-10 h-[44px] w-[44px] lg:h-[54px] lg:w-[54px] relative'>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src={img_url}
                  alt='desing-logo'
                />
              </div>

              <h3 className='text-heading_dark text-xl'>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
