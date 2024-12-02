import React, { useEffect, useState } from 'react'
import SeasonHeader from '../global/SeasonHeader'
import Slider from 'react-slick';
import { journeyData } from '../../data/aboutUsData';
import { motion } from 'framer-motion';

const OurJourney: React.FC = () => {
  const [currentScrollDataIndex, setCurrentScrollDataIndex] = useState(0);

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: true,
  };


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          setCurrentScrollDataIndex(index)
        }
      })
    }, {
      threshold: 0.5,
      rootMargin: '-100px 0px',
    })
    document.querySelectorAll('.journey-item').forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className='hidden sm:block w-full pb-28'>
        <SeasonHeader text={`our journey`} styles='bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none' />
        <div className='w-full px-10 lg:px-20'>
          <div className='sticky z-[-1] top-60 lg:top-24 w-full flex justify-center items-center'>
            <h1 className='text-[200px] lg:text-[450px] font-bold opacity-80 text-black'>{journeyData[currentScrollDataIndex]?.year}</h1>
          </div>
          {journeyData?.map((data, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9, }}
                viewport={{ amount: 0.1, margin: "-25% 0px", once: true, }}
                whileInView={{ opacity: 1, y: 0, scale: 1, }}
                transition={{ duration: 0.5 }}
                className={`journey-item w-1/2 lg:px-20 ${i % 2 == 0 ? 'ml-auto' : ''}`}
                data-index={i}
              >
                <h1 className='text-6xl text-aboutUsRed font-light border-t-2 border-aboutUsRed py-5 pl-1'>{data?.year}</h1>
                <img src={data?.image} className='w-full object-cover rounded-t-xl' alt="" />
                <h1 className='bg-white rounded-b-xl pl-5 py-4 font-medium text-xl'>{data?.description}</h1>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className='block sm:hidden mb-28 w-full'>
        <SeasonHeader text={`our journey`} styles='w-full bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-1 md:mb-8' />
        <Slider {...mobileSliderSettings} className='w-full flex justify-center gap-4 items-center'>
          {
            journeyData.map((data) => (
              <div className='px-2 pt-2'>
                <div className={`z-10 transition-all duration-300 border border-aboutUsRed bg-white rounded-xl max-w-[340px] min-h-[330px]`}>
                  <div key={data?.id} className='relative p-3'>
                    <div className='w-full bg-gray-200 h-52 mb-4 rounded-lg'>
                      <img src={data?.image} className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='text-aboutUsRed text-5xl font-bebasNeue font-light'>
                      {data?.year}
                    </div>
                    <p className='text-md leading-4 font-manrope font-semibold'>{data?.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  )
}

export default OurJourney