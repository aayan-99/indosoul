import React from 'react'
import OfferedExperienceCard from './OfferedExperienceCard'
import Slider from 'react-slick';
import { findFillColor } from '../../utils/helpers';
import { useLocation, useNavigate } from 'react-router';

interface CardContainerCarousalProps {
  data: any;
}

const CardContainerCarousal: React.FC<CardContainerCarousalProps> = ({ data }) => {

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
  }

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const setLogoType = (type: 'image' | 'text') => {
    if (type === 'image') {
      return pathname === '/indo-soul-live' || pathname === '/'
    }
    return pathname !== '/indo-soul-live' && pathname !== '/'
  }

  const navigateUrl = (link: string) => {
    return navigate(link);
  }


  return (
    <div>
      <div className='w-full hidden md:flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-5 px-16'>
        {
          data?.map((data: any) => (
            <OfferedExperienceCard
              onCardClick={() => navigateUrl(data?.links)}
              key={data?.id}
              data={data}
              buttonColor={pathname !== '/' ? findFillColor(pathname) : findFillColor(data?.links)}
              imageLogo={setLogoType('image')}
              textLogo={setLogoType('text')}
              infoPopup={pathname === '/indo-soul-live' || pathname === '/soul-sabha'}
            />
          ))
        }
      </div>
      <div className='md:hidden '>
        <Slider {...mobileSliderSettings}>
          {
            data?.map((data: any) => (
              <div className='px-2 flex justify-center items-center'>
                <OfferedExperienceCard
                  key={data?.id}
                  data={data}
                  buttonColor={findFillColor(pathname)}
                  imageLogo={setLogoType('image')}
                  textLogo={setLogoType('text')}
                  infoPopup
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default CardContainerCarousal