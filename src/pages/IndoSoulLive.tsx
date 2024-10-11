import { useEffect, useRef, useState } from 'react'
import { ourCareerData, musicianGallery } from '../data/indoSoulLiveData'
import heroImageIndosoulLive from '../assets/indosoul/images/hero_landing.jpg'
import indoSoluLiveLogo from '../assets/indosoul/icons/logo-main.svg'
import CountUp from "react-countup";
import Hero from '../components/global/Hero'
import MusiciansCarousal from '../components/indosoullive/MusiciansCarousal'
import Experiences from '../components/indosoullive/Experiences';
import ArtistGallery from '../components/global/ArtistGallery';
import VideoComponent from '../components/global/VideoComponent';
import PreLoader from '../components/global/PreLoader';

const LandingPage = () => {

    const experienceRefs = ourCareerData?.experience.map(() => useRef(null));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally disconnect the observer once the component is in view
                    observer.disconnect();
                }
            });
        }, options);

        experienceRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [experienceRefs]);

    const heroImages = [
        {
            id: 0,
            image: heroImageIndosoulLive,
            title: '',
        },
        {
            id: 1,
            image: heroImageIndosoulLive,
            title: '',
        },
    ];

    const heroText = (
        <h1 className="text-[1rem] uppercase tracking-widest">Embracing Indian Heritage through Classical music</h1>
      )

    return (
        <div className='relative overflow-hidden bg-black'>
            <PreLoader logoImage={indoSoluLiveLogo} bgColor='bg-black' />
            <Hero heroImages={heroImages} logo={indoSoluLiveLogo} heroText={heroText} />
            <Experiences />
            <div className='w-full z-10 relative px-5 sm:px-10 md:px-20 lg:px-32 xl:px-64'>
                <div className='flex flex-col md:flex-row justify-center md:items-center gap-10 md:gap-20 xl:gap-32 py-40 xl:py-56 font-normal'>
                    {
                        ourCareerData?.experience?.map((data, index) => (
                            <div key={data?.id} className='text-left md:text-center font-bebasNeue font-extralight'>

                                <h1 className='text-white text-9xl lg:text-[8rem]'>
                                    {
                                        isVisible ? (
                                            <>
                                                <CountUp
                                                    start={0}
                                                    end={data?.amount}
                                                    duration={3}
                                                /> {`+`}
                                            </>
                                        ) : null
                                    }
                                </h1>
                                <h1 ref={experienceRefs[index]} className='text-white text-4xl uppercase ml-5 md:ml-0'>{data?.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex flex-col gap-20 lg:gap-40 px-10 md:px-0 mb-20 md:mb-52'>
                <MusiciansCarousal />
                <VideoComponent video={ourCareerData?.bandVideo} />
            </div>
            <ArtistGallery imagesLTR={musicianGallery.leftToRight} imagesRTL={musicianGallery.rightToLeft} />
        </div>
    )
}

export default LandingPage