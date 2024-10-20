import React, { useState } from "react"
import Slider from "react-slick";

interface VideoCarousalProps {
  data: data[];
  header?: string;
}

interface data {
  id: number;
  title: string;
  video: string;
}

const VideoComponent: React.FC<VideoCarousalProps> = ({ data, header }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: true,
    beforeChange: (_prev: number, next: number) => {
        setCurrentSlideIndex(next);
    },
    customPaging: (i: number) => (
        <div className={`w-3 h-3 rounded-full mt-10 ${currentSlideIndex === i ? 'bg-gray-600' : 'bg-gray-200'}`} />
    )
  };

  return (
    <div className='w-full'>
      { header ? <h1 className='' style={{ color: `var(--${header})` }}>{header}</h1> : null }
      <Slider {...sliderSettings} className="w-full flex justify-center items-center">
        {
          data?.map((videoObj, i) => (
             <div className={`rounded-sm h-[40vh] md:h-[80vh] ${currentSlideIndex === i ? 'px-10 md:px-14' : ''}`}>
               <video src={videoObj?.video} muted autoPlay loop={true} className={`rounded-sm h-[40vh] md:h-[80vh] w-full object-cover ${currentSlideIndex === i ? '' : 'py-9 md:py-12'}`}></video>
             </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default VideoComponent