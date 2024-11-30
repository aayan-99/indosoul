import React, { useState } from 'react'
import Slider from 'react-slick'

interface SmallCarousalProps {
  carousalData: any;
  event?: boolean;
  info?: boolean;
}

const SmallCarousal: React.FC<SmallCarousalProps> = ({ carousalData, event, info }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideMobile, setActiveSlideMobile] = useState(0);

  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 0.1,
    cssEase: 'linear',
    autoplay: false,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (activeSlide: number) => {
      setActiveSlide(activeSlide);
    },
  };

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    beforeChange: (activeSlide: number) => {
      setActiveSlideMobile(activeSlide);
    },
  }

  return (
    <div className='w-full'>
      <div className='hidden md:block mb-8'>
        <Slider {...desktopSliderSettings} className=''>
          {
            carousalData?.map((data: any, i: number) => (
              <div className='w-full relative pb-10'>
                <div key={data?.id} className={`w-full p-5 rounded-2xl relative ${i === activeSlide ? 'border-2 border-[#373737] bg-white' : 'scale-[80%]'}`}>
                <div className={`w-full h-full flex flex-col xl:flex-row justify-start items-center ${i === activeSlide ? 'gap-5' : 'gap-5'}`}>
                  <div className={`w-full max-w-32 xl:max-w-40 relative ${i === activeSlide ? '' : ''}`}>
                    <img src={data?.image} className='w-full max-w-32 xl:max-w-40 rounded-xl z-20 relative' alt="" />
                  </div>
                  {event ? (
                    <div className='w-full'>
                      <h1 className='text-xl font-bold'>{data?.event}</h1>
                      <p className='text-sm font-semibold'>{data?.venue}</p>
                      <p className='mb-1 text-xs font-semibold'>{data?.date}</p>
                      <p className='text-xs font-medium'>{data?.desc}</p>
                    </div>
                  ) : info ? (
                    <div className='w-full text-center xl:text-left'>
                      <h1 className='text-lg leading-none mb-1 font-semibold'>{data?.artistName}</h1>
                      <div className='2xl:pr-4'>
                        <p className='text-xs font-medium w-fit'>{data?.desc}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
                {i === activeSlide ? <div className='w-full bottom-5 bg-gray-200 absolute top-4 left-4 rounded-3xl z-[-1]' /> : null}
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='md:hidden mb-2'>
        <Slider {...mobileSliderSettings} className=''>
          {
            carousalData?.map((data: any, i: number) => (
              <div key={data?.id} className={`p-2  ${activeSlideMobile === i ? '' : ''}`}>
                <div key={data?.id} className='p-3 bg-white rounded-[20px] relative'>
                  <div className='flex flex-col justify-center items-center'>
                    <div className={`w-fit relative ${activeSlideMobile === i ? '' : ''}`}>
                      <img src={data?.image} className='w-full rounded-[18px] z-20 relative' alt="" />
                      {/* {activeSlideMobile === i && <div className='w-full h-full bg-gray-200 absolute top-4 left-4 rounded-[20px] z-10' />} */}
                    </div>
                    {
                      event ? (
                        <div className={`px-3 text-center mt-3`}>
                          <h1 className='text-xl font-bold'>{data?.event}</h1>
                          <p className='text-sm font-semibold'>{data?.venue}</p>
                          <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                          <p className='text-xs font-medium leading-5'>{data?.desc}</p>
                        </div>
                      ) : info ? (
                        <div className={`text-center mt-3`}>
                          <h1 className='text-xl font-bold mb-1'>{data?.artistName}</h1>
                          <p className='text-xs font-medium leading-5'>{data?.desc}</p>
                        </div>
                      ) : null
                    }
                  </div>
                  {/* <div className={`absolute w-full h-full opacity-30 rounded-full bottom-0 left-3 z-10 bg-black`} /> */}
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default SmallCarousal

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
      <div className={`next-slick-arrow z-50 absolute top-1/2 right-8 text-4xl cursor-pointer`}
          style={{ ...style, display: "block" }}
          onClick={onClick}
      > {`>`} </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
      <div className={`next-slick-arrow z-50 absolute top-1/2 left-8 text-4xl cursor-pointer`}
          style={{ ...style, display: "block" }}
          onClick={onClick}
      > {`<`} </div>
  );
}
