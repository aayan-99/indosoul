import React from 'react'
import SeasonHeader from '../global/SeasonHeader'

const Purpose: React.FC = () => {

  return (
    <div className='mb-20 md:mb-28 mt-14 flex flex-col justify-center items-center gap-3 md:gap-10'>
      <SeasonHeader text='purpose' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#10688E] to-[#02A4EA]' />
      <div className='flex justify-center items-center relative z-10 max-w-[80vw] max-h-[80vh] mx-auto mb-7 md:mb-14'>
        <iframe
          width="100%"
          height="100%"
          className={`w-full md:w-[50vw] aspect-video object-cover rounded-2xl`}
          src="https://www.youtube.com/embed/-f-Wt_6M7m8?si=4Fchgr8HfgHie_5W" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <div className={`absolute w-full h-full opacity-30 rounded-3xl md:rounded-[32px] top-3 md:top-10 left-3 md:left-10 z-[-1] bg-[#02A4EA]`} />
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-2 text-center px-12 md:px-5'>
        <p className='text-xs md:text-lg font-medium leading-5 text-black font-manrope'>At IndoSoul Academy, we cultivate the next generation of musicians by providing</p>
        <h1 className='text-2xl md:text-4xl leading-7 text-black font-manrope mb-2 md:mb-5'>high quality, value added music learning.</h1>
        <p className='text-xs md:text-sm font-medium leading-5 md:max-w-[60%]'>Guided by the extensive experience of our founder, Karthick Iyer, and supported by our team of expert teachers, we are committed to employing personalized and creative teaching techniques and methods. This ensures that each student can fully realize their musical potential. Karthick's rich musical journey and passion for education add immense value, inspiring students to achieve mastery in their craft with confidence and creativity.</p>
      </div>
    </div>
  )
}

export default Purpose