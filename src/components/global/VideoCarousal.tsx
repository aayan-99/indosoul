import React, { useState } from "react"
import Slider from "react-slick";

interface VideoCarousalProps {
  data: data[];
  header?: string;
}

interface data {
  id: number;
  title: string;
  video?: string;
  youTubeId?: string,
}

const VideoCarousal: React.FC<VideoCarousalProps> = ({ data, header }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseonhover: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_prev: number, next: number) => {
      setCurrentSlideIndex(next);
    },
    customPaging: (i: number) => (
      <div className={`w-2 h-2 hidden md:blockrounded-full mt-6 ${currentSlideIndex === i ? 'bg-gray-600' : 'bg-gray-200'}`} />
    )
  };

  return (
    <div className='w-full'>
      {header ? <h1 className='' style={{ color: `var(--${header})` }}>{header}</h1> : null}
      <Slider {...sliderSettings} className="w-full flex justify-center items-center">
        {
          data?.map((videoObj, i) => (
            <div className={`rounded-sm h-[20vh] md:h-[80vh] ${currentSlideIndex === i ? 'md:px-14' : ''}`}>
              {
                videoObj?.youTubeId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    className={`rounded-2xl h-[20vh] md:h-[80vh] w-full object-cover ${currentSlideIndex === i ? '' : 'py-2 md:py-12 opacity-20'}`}
                    src={`https://www.youtube.com/embed/${videoObj?.youTubeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                ) : <video src={videoObj?.video} muted autoPlay playsInline loop={true} className={`rounded-2xl h-[20vh] md:h-[80vh] w-full object-cover ${currentSlideIndex === i ? '' : 'py-2 md:py-12 opacity-20'}`}></video>
              }
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default VideoCarousal

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div className={`next-slick-arrow z-50 absolute top-1/2 text-gray-400 right-12 text-4xl cursor-pointer`}
      style={{ ...style, display: "block", fontSize: '80px' }}
      onClick={onClick}
    > {`>`} </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div className={`next-slick-arrow z-50 absolute top-1/2 text-gray-400 left-8 text-6xl cursor-pointer`}
      style={{ ...style, display: "block", fontSize: '80px' }}
      onClick={onClick}
    > {`<`} </div>
  );
}