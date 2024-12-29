import { useEffect, useRef, useState } from 'react'
import { ourCareerData, musicianGallery } from '../data/indoSoulLiveData'
import indoSoluLiveLogo from '../assets/indosoul/icons/indosoulLiveLogo.png'
import liveBgImage from '../assets/indosoul/images/indosoulLiveBgImage.jpg'
import CountUp from "react-countup";
import Hero from '../components/global/Hero'

import bandVideo from '../assets/indosoul/videos/bandVideo.webm'
import Experiences from '../components/indosoullive/Experiences';
import ArtistGallery from '../components/global/ArtistGallery';
import VideoCarousal from '../components/global/VideoCarousal';
import PreLoader from '../components/global/PreLoader';
import BackgroundImageContainer from '../components/global/BackgroundImageContainer';
import heroImageIndosoulLive from '../assets/indosoul/images/hero_landing.jpg'

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

    const heroText = (
        <h1 className="text-[1rem] uppercase tracking-widest">Live Contemporary Music for Every Stage</h1>
    )

    const videoCarousaData = [
        {
            id: 0,
            title: 'video 1',
            video: bandVideo,
        },
        {
            id: 1,
            title: 'video 2',
            video: bandVideo,
        },
        {
            id: 2,
            title: 'video 3',
            video: bandVideo,
        },
        {
            id: 3,
            title: 'video 4',
            video: bandVideo,
        },
        {
            id: 4,
            title: 'video 5',
            video: bandVideo,
        },
    ];
    return (
        <div className='relative overflow-hidden bg-black'>
            <PreLoader logoImage={indoSoluLiveLogo} bgColor='bg-black' />
            <Hero singleHeroImage={heroImageIndosoulLive} logo={indoSoluLiveLogo} heroText={heroText} />
            <Experiences />
            <div className='mt-36 mb-32 md:mb-40'>
                <BackgroundImageContainer backgroundImage={liveBgImage} bgSize='100% 100%'>
                    <div className='w-full z-10 relative px-5 sm:px-10 md:px-20 lg:px-32 xl:px-64'>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 xl:gap-32 py-20 font-normal'>
                            {
                                ourCareerData?.experience?.map((data, index) => (
                                    <div key={data?.id} className=' font-bebasNeue font-extralight'>

                                        <h1 className='text-white text-6xl font-medium'>
                                            {
                                                isVisible ? (
                                                    <>
                                                        <CountUp
                                                            start={0}
                                                            end={data?.amount}
                                                            duration={3}
                                                        /> {index === 1 ? 'M' : null}{`+`}
                                                    </>
                                                ) : null
                                            }
                                        </h1>
                                        <h1 ref={experienceRefs[index]} className='text-white text-2xl uppercase text-center font-medium tracking-wider'>{data?.title}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </BackgroundImageContainer>
            </div>
            <div className='w-full flex flex-col gap-20 lg:gap-40 md:px-0 mb-32 md:mb-52'>
                {/* <MusiciansCarousal /> */}
                <VideoCarousal data={videoCarousaData} />
            </div>
            <ArtistGallery imagesLTR={musicianGallery.leftToRight} imagesRTL={musicianGallery.rightToLeft} />
        </div>
    )
}

export default LandingPage