import React, { useState } from 'react'
import reverbEffect from '../../assets/indosoulroots/icons/reverb.svg'
import separator from '../../assets/indosoulroots/icons/separator-roots.svg'
import SocialMediaIconsColor from '../global/SocialMediaIconsColor'
import { bookingCardsData } from '../../data/indoSoulRootsData'
import SeasonHeader from '../global/SeasonHeader'

const Albums: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='mb-28 overflow-hidden'>
      <div className='w-full flex justify-center items-center py-6 mb-16'>
        <img src={separator} className='w-full max-w-[400px]' alt="" />
      </div>
      <SeasonHeader text='our albums' />
      <div className='relative max-w-screen flex justify-center items-center pt-10 pb-10 px-5 md:px-20'>

        <div className="flex justify-center items-center gap-1 md:gap-3 h-fit mx-auto relative">
          
          {/* Left side (stacked smaller images) */}
          <div className="flex flex-col col-span-1 gap-1 md:gap-3">
            {bookingCardsData.map((album, i) => (
              <div key={album.id} className={`${activeIndex === i ? 'hidden' : ''}`} onClick={() => setActiveIndex(i)}>
                <img src={album.image} className="rounded-lg w-full max-w-[115px] md:max-w-[150px]" />
              </div>
            ))}
          </div>

          {/* Right side (larger main image) */}
          <div className="col-span-2 w-full">
            <div className="">
              <img
                src={bookingCardsData[activeIndex].image}
                className="rounded-lg w-full max-w-[370px] h-full object-cover"
              />
            </div>
          </div>

        </div>

        <img src={reverbEffect} className='object-cover absolute top-1/2 -translate-y-1/2 w-full max-w-[600px] -translate-x-[110%] right-1/2 animate-pulse' alt="" />
        <img src={reverbEffect} className='object-cover absolute top-1/2 -translate-y-1/2 w-full max-w-[600px] translate-x-[110%] left-1/2 animate-pulse' alt="" />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center font-manrope w-full min-w-[300px] max-w-96'>
          <h1 className='text-2xl md:text-3xl tracking-wide font-semibold mb-2'>{bookingCardsData[activeIndex].title}</h1>
          <p className='text-md font-semibold leading-5 ml-1 mb-8 md:mb-4'>{bookingCardsData[activeIndex].desc}</p>
          <div className='pl-1'>
            <SocialMediaIconsColor gap='16' inputData={bookingCardsData[activeIndex]?.link} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Albums