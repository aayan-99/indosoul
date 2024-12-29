import React, { useEffect, useState } from 'react'
import WatchButton from './WatchButton'
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { useLocation } from 'react-router';
import IndoSoulPopUp from '../indosoullive/IndoSoulPopUp';
import SoulSabhaPopUp from '../soulsabha/SoulSabhaPopUp';
import { findFillColor } from '../../utils/helpers';

interface PopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: string[] | ArtistContentProps[] | any;
  links?: string;
  cardText?: string;
}

interface ArtistContentProps {
  id: number;
  artistImage: string;
  artistName: string;
  songName: string;
  youtubeLink: string;
  spotifyLink: string;
}

interface OfferedExperienceCardProps {
  data: PopUpData;
  textLogo?: boolean;
  imageLogo?: boolean;
  onCardClick?: () => void;
  onButtonClick?: () => void;
  infoPopup?: boolean;
  buttonColor: string | undefined;
}

const OfferedExperienceCard: React.FC<OfferedExperienceCardProps> = ({ data, textLogo, imageLogo, onCardClick, onButtonClick, infoPopup, }) => {

  const [viewPopUp, setViewPopUp] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const { pathname } = useLocation();

  useEffect(() => {
    viewPopUp ? blockScroll() : allowScroll();
  }, [viewPopUp]);

  return (
    <>
      <div key={data?.id} className='flex flex-col gap-4 items-center justify-center cursor-pointer'>
        <div className='h-fit group transition-all duration-200 ease-in-out'>

          <div className='hidden md:block w-fit relative group overflow-hidden rounded-[27px] border-2' style={{ borderColor: findFillColor(pathname) }} onClick={infoPopup ? () => setViewPopUp(true) : onCardClick}>
            <div className='w-fit h-fit overflow-hidden rounded-3xl relative'>
              <img src={data?.image} className={`w-full rounded-3xl group-hover:scale-[130%] group-hover:blur-xl transition-all duration-200 ease-in-out object-cover ${pathname === '/' ? 'max-w-[300px] lg:max-w-[350px] xl:max-w-[300px] md:h-[30vh] lg:h-[40vh] xl:h-[50vh]' : 'max-w-[250px] lg:max-w-[350px] xl:max-w-[300px] h-[35vh] lg:h-[50vh]'}`} alt="" />
              <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0"></div>
            </div>
            <div className={`absolute w-full h-full flex flex-col justify-end items-center pb-5 top-1/3 group-hover:top-0 transition-all duration-200 ease-in-out rounded-[22px]`}>
              <div className={`w-full flex flex-col justify-center items-center gap-20 xl:gap-32 relative`}>
                <div className='-translate-y'>
                  {textLogo ? <h1 className={`font-bebasNeue text-[35px] leading-none text-center text-white ${data?.title?.length > 30 ? 'w-[200px]' : ' w-[140px]'}`}>{data?.title}</h1> : imageLogo ? <img src={data?.logo} className='w-full max-w-[200px]' alt="" /> : null}
                </div>
                {pathname === '/indo-soul-live' || pathname === '/' ? (
                  <div className={`absolute top-1/2 text-white flex font-manrope font-medium flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out px-5`}>
                    <p className='text-LiveRed text-sm h-10 text-center mb-14'>{data?.cardText}</p>
                  </div>
                ) : null}
                <p className={`flex font-manrope font-medium ${pathname === '/indo-soul-music' || pathname === '/flow' ? 'invisible' : ''}`} style={{ color: findFillColor(pathname) }}>Know more <span className='ml-1 mt-[0.5px]'>{`>`}</span> </p>
              </div>
            </div>
          </div>

          <div className='w-full relative md:hidden' onClick={infoPopup ? () => setViewPopUp(true) : onCardClick}>
            <img src={data?.image} className='w-full h-[60vh] object-cover rounded-2xl' alt="" />
            {
              textLogo ?
                <span className={`absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[15] ${data?.title?.length > 30 ? 'w-[200px]' : ' w-[140px]'} flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}>
                  <h1 className='font-bebasNeue text-[35px] leading-none text-center text-white'>{data?.title}</h1>
                  {pathname !== '/' ? <p className='translate-y-2 sm:translate-y-32 md:translate-y-28 flex font-manrope font-medium' style={{ color: findFillColor(pathname) }}>Know more <span className='ml-1 mt-[0.5px]'>{`>`}</span> </p> : null}
                </span>
                : imageLogo ?
                  <div className='absolute bottom-14 sm:bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[15] w-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out'>
                    <img className='w-full' src={data?.logo} alt="" />
                    {pathname === '/' || pathname === '/indo-soul-live' ? <p className='translate-y-7 md:translate-y-28 text-yellow-600 flex font-manropefont-semibold md:font-medium' style={{ color: findFillColor(pathname) }}>Know more <span className='ml-1 mt-[0.5px]'>{`>`}</span> </p> : null}
                  </div>
                  : null
            }
            <div className={`absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl`} />
          </div>
        </div>
        <WatchButton
          btnText='watch'
          bgColor={pathname === '/' ? findFillColor(data?.links ? data?.links : pathname) : findFillColor(pathname)}
          onClick={onButtonClick}
          styles={pathname === '/indo-soul-live' ? 'text-white' : pathname === '/soul-sabha' ? 'text-black' : pathname === '/flow' ? 'text-white' : ''}
          btnColor={pathname === '/indo-soul-live' ? 'white' : pathname === '/soul-sabha' ? 'black' : pathname === '/flow' ? 'white' : null}
        />
      </div>
      {pathname === '/indo-soul-live' ? <IndoSoulPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : pathname === '/soul-sabha' ? <SoulSabhaPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : null}
    </>
  )
}

export default OfferedExperienceCard