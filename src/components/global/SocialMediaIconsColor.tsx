import React from 'react'
import appleMusic from '../../assets/icons/appleMusic.svg'
import spotifyWhite from '../../assets/icons/spotify.svg'
import youtubeWhite from '../../assets/icons/youtube.svg'

interface SocialMediaIconsColor {
  gap?: string
  inputData?: any;
}

const SocialMediaIconsColor: React.FC<SocialMediaIconsColor> = ({ gap, inputData }) => {

  const socialMedia: {
    id: number;
    logo: string;
    link: string;
    title: string;
  }[] = [
      {
        id: 0,
        logo: appleMusic,
        link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
        title: 'Apple Music'
      },
      {
        id: 1,
        logo: spotifyWhite,
        link: 'https://open.spotify.com/artist/04czw5AgY218VUkgCtwRv9',
        title: 'Spotify'
      },
      {
        id: 2,
        logo: youtubeWhite,
        link: 'https://www.youtube.com/@IndoSoulLive',
        title: 'Youtube'
      },
    ];

  return (
    <div className={`w-fit justify-center md:w-fit flex items-center gap-${gap ? gap : '20'}`}>
      {
        inputData ? (
          <>
            {
              inputData?.map((data: { id: number; logo: string; link: string; title: string; }, i: number) => (
                <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className={`${i === 0 ? 'w-5' : 'w-6 mt-1'} cursor-pointer`} alt="" />
              ))
            }
          </>
        ) : (
          <>
            {
              socialMedia?.map((data, i) => (
                <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className={`${i === 0 ? 'w-5' : 'w-6 mt-1'} cursor-pointer`} alt="" />
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default SocialMediaIconsColor