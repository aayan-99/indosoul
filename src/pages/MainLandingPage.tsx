import React from 'react'
import Hero from '../components/global/Hero'
import OurOfferings from '../components/landingpage/OurOfferings'
// import Events from '../components/landingpage/Events'
import PreLoader from '../components/global/PreLoader'
import BackgroundImageContainer from '../components/global/BackgroundImageContainer'
import SeasonHeader from '../components/global/SeasonHeader'
import SocialMediaIcons from '../components/global/SocialMediaIcons'
import SoulCircle from '../components/landingpage/SoulCircle'
import ArtistGallery from '../components/global/ArtistGallery'
import { musicianGallery } from '../data/landingPageData'
import heroImage from '../assets/landing/images/heroimages/hero.jpg'
import logoIndosoul from '../assets/icons/indosoulLogoMain.png'
import bgContainerImage from '../assets/landing/images/landingBgContainer.jpg'

const MainLandingPage: React.FC = () => {



  return (
    <div className=''>
      <PreLoader logoImage={logoIndosoul} bgColor='bg-black' />
      <Hero singleHeroImage={heroImage} logo={logoIndosoul} />
      <OurOfferings />
      {/* <Events /> */}
      <BackgroundImageContainer backgroundImage={bgContainerImage} bgSize='100%'>
        <div className='py-16 md:py-24'>
          <SeasonHeader text={`experience indosoul`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-3 md:mb-8' />
          <SocialMediaIcons />
        </div>
      </BackgroundImageContainer>
      <SoulCircle />
      <ArtistGallery imagesLTR={musicianGallery.leftToRight} imagesRTL={musicianGallery.rightToLeft} />
    </div>
  )
}

export default MainLandingPage