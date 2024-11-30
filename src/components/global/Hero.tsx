import React, { useState } from 'react'
import { useLocation } from 'react-router'
import PrimaryButton from '../global/PrimaryButton';
import Slider from 'react-slick'
import { findPrimaryButton } from '../../utils/helpers';

interface HeroImage {
    id: number;
    title: string;
    image: string;
}

interface HeroProps {
    heroImages?: HeroImage[];
    logo?: string;
    singleHeroImage?: string;
    logoText?: string;
    heroText?: JSX.Element;
}

const Hero: React.FC<HeroProps> = ({ heroImages, logo, logoText, singleHeroImage, heroText }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const { pathname } = useLocation();

    const primaryButtonProps = findPrimaryButton(pathname);

    const handleCLick = () => {
        pathname === '/indo-soul-music' ?
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSckGmjJe8HL8x2mC-W8KQKE894rWzRRJ8Jn2vLVnUNcv25qFg/viewform?usp=send_form", '_blank')
        :
        window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseonhover: false,
        beforeChange: (_prev: number, next: number) => {
            setCurrentSlideIndex(next);
        },
        customPaging: (i: number) => (
            <div className={`w-2 h-2 rounded-full mt-5 ${currentSlideIndex === i ? 'bg-black' : 'bg-gray-400'}`} />
        )
    };

    return (
        <div className={`w-[99.99%] mx-auto relative overflow-hidden ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
            <div className='mx-auto w-full md:pb-20'>
                {
                    singleHeroImage ? (
                        <div className='w-full h-full relative'>
                            <img src={singleHeroImage} className={`w-full h-[90vh] md:h-screen object-cover ${pathname === '/soul-sabha' ? 'object-cover object-right md:object:cover' : ''}`} alt="" />
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                        </div>
                    ) : (
                        <Slider {...settings} className='w-full'>
                            {
                                heroImages?.map((data) => (
                                    <div key={data?.id} className='w-full h-full relative'>
                                        <img src={data?.image} className='w-full h-[90vh] md:h-screen object-cover' alt="" />
                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                                    </div>
                                ))
                            }
                        </Slider>
                    )
                }
            </div>
            <div className={`absolute flex flex-col items-center w-full px-6 z-10 ${pathname === '/' ? 'top-[60%] md:top-[52%] left-1/2 -translate-x-1/2' : 'top-[55%] md:top-[47%] -translate-y-[10%] left-1/2 -translate-x-1/2'}`}>
                {
                    logo ? <img src={logo} className={`w-64 md:w-96`} alt="" /> : logoText ? <div className='text-white font-manrope font-light text-[3rem] md:text-[4rem] tracking-wide text-center mt-40 mb-1'>{logoText}</div> : null
                }
                <div className='text-white flex flex-col items-center xl:text-nowrap text-md md:text-lg xl:text-xl md:gap-2 text-center'>
                    {heroText}
                    {
                        pathname === '/about-us' ? null : (
                            <div className={`w-full flex justify-center items-center ${pathname === '/' ? '-translate-y-4' : ' pt-6 md:pt-5'}`}>
                                <PrimaryButton {...primaryButtonProps} onClick={handleCLick} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero