import bookingImage1 from '../assets/indosoulroots/images/performancecards/01.png'
import bookingImage2 from '../assets/indosoulroots/images/performancecards/02.png'
import bookingImage3 from '../assets/indosoulroots/images/performancecards/03.png'
import bookingImage4 from '../assets/indosoulroots/images/performancecards/04.png'

import songsImage1 from '../assets/indosoulroots/images/galleryimages/01.png'
import songsImage2 from '../assets/indosoulroots/images/galleryimages/02.png'
import songsImage3 from '../assets/indosoulroots/images/galleryimages/03.png'
import songsImage4 from '../assets/indosoulroots/images/galleryimages/04.png'
import songsImage5 from '../assets/indosoulroots/images/galleryimages/05.png'
import songsImage6 from '../assets/indosoulroots/images/galleryimages/06.png'
import songsImage7 from '../assets/indosoulroots/images/galleryimages/07.png'


import appleMusic from '../assets/icons/appleMusic.svg'
import spotifyWhite from '../assets/icons/spotify.svg'
import youtubeWhite from '../assets/icons/youtube.svg'


import { BookingCardsData, DescriptionData } from '../types/indoSoulRootsTypes';
import { GalleryImagesType } from '../types/globalTypes'

export const descriptionData: DescriptionData[] = [
  {
    id: 0,
    desc: `Indosoul Roots showcases the band Indosoul's original compositions dating back to their inception in 2012.`,
  },
  {
    id: 1,
    desc: `Drawing from strong Carnatic roots yet influenced by diverse global sounds, Roots represents Indosoul's most cherished genre of music, uniting the band with passion and purpose.`,
  },
  {
    id: 2,
    desc: `The repertoire includes a variety of compositions, spanning from traditional Carnatic Kritis such as Raghuvamsa Sudha and Akhilandeswari, to highly acclaimed originals like Clown's Junket and At The Theatres that have captivated audiences to energetic pieces such as Bienvenido A Mylapore and Timelapse to Infinity that get the audience grooving along with the musicians on stage.`,
  },
  {
    id: 3,
    desc: `As part of Indosoul Roots, the band has released four albums over the years, many of which have amassed millions of views. They have toured globally with these albums, notably undertaking two US tours in 2016 and 2017, performing at events like Tomorrow's India Concert in Singapore, MILFF Festival in Malaysia, and the Harvard Tamil Sangam Concert in Colombo, among others. In India, the band has showcased their independent music extensively, participating in events such as the Hindu Food Festival, the multi-city Park Festival hosted by Park Hotels, IIT Sarang Classical Night, November Fest by Hindu, the Grover Wine Festival in Bangalore, and most recently their At the Theatres multi-city tour in 2024 unanimously enthralling audience & moving them with their music.`,
  },
  {
    id: 4,
    desc: `Indosoul Roots performances hold a special place in music festivals and indie music venues where there is a deep appreciation for creating original, independent music.`,
  },
];

export const bookingCardsData: BookingCardsData[] = [
  {
    id: 0,
    image: bookingImage1,
    title: 'TWO SIDES OF KARMA',
    desc: 'Indosoul by Karthick Iyer',
    link: [
      {
        id: 0,
        logo: appleMusic,
        link: 'https://music.apple.com/us/album/two-sides-of-karma/1455668691',
        title: 'Apple Music'
      },
      {
        id: 1,
        logo: spotifyWhite,
        link: 'https://open.spotify.com/album/4WawflRDbhDVOY3H6KAWZi',
        title: 'Spotify'
      },
      {
        id: 2,
        logo: youtubeWhite,
        link: 'https://www.youtube.com/playlist?list=OLAK5uy_lMEQhzKtwItdeTD8HiCH5sER787-ZivJM',
        title: 'Youtube'
      },
    ],
  },
  {
    id: 1,
    image: bookingImage3,
    title: 'EQUILIBRIUM',
    desc: 'Indosoul by Karthick Iyer',
    link: [
      {
        id: 0,
        logo: appleMusic,
        link: 'https://music.apple.com/us/album/equilibrium/1708935482',
        title: 'Apple Music'
      },
      {
        id: 1,
        logo: spotifyWhite,
        link: 'https://open.spotify.com/album/6tY4vGcBOCrK6Nu8MauIvO',
        title: 'Spotify'
      },
      {
        id: 2,
        logo: youtubeWhite,
        link: 'https://www.youtube.com/playlist?list=OLAK5uy_lJIn9sLi2PoK02v8rkXIUndQd15Gc5bc0',
        title: 'Youtube'
      },
    ],
  },
  {
    id: 2,
    image: bookingImage4,
    title: 'SOUL SABHA Season 1',
    desc: 'Indosoul by Karthick Iyer',
    link: [
      {
        id: 0,
        logo: appleMusic,
        link: 'https://music.apple.com/us/album/soul-sabha-season-1/1722636807',
        title: 'Apple Music'
      },
      {
        id: 1,
        logo: spotifyWhite,
        link: 'https://open.spotify.com/album/7GMW8oc7PfUdfsQ0TJKshN',
        title: 'Spotify'
      },
      {
        id: 2,
        logo: youtubeWhite,
        link: 'https://www.youtube.com/playlist?list=OLAK5uy_k1g4O_B8WZLmhI9VR6SvW9ES4XNagwJZY',
        title: 'Youtube'
      },
    ],
  },
  {
    id: 3,
    image: bookingImage2,
    title: 'THE PALLAVI SHIFT',
    desc: 'Indosoul by Karthick Iyer ft. Dondieu Divin',
    link: [
      {
        id: 0,
        logo: appleMusic,
        link: 'https://music.apple.com/us/album/the-pallavi-shift/1724770824',
        title: 'Apple Music'
      },
      {
        id: 1,
        logo: spotifyWhite,
        link: 'https://open.spotify.com/album/5SdKQyaInB2TV6EpwZXnlV',
        title: 'Spotify'
      },
      {
        id: 2,
        logo: youtubeWhite,
        link: 'https://www.youtube.com/playlist?list=OLAK5uy_mip7Ae0vvoiB-5Re5N_jwxca-ZMvLi92w',
        title: 'Youtube'
      },
    ],
  },
];

export const rootsGalleryImages: GalleryImagesType = {
    listiningSongsImages: [
        songsImage1,
        songsImage5,
        songsImage4,
        songsImage7,
        songsImage2,
        songsImage6,
        songsImage3,
    ],
    visualArtsImages: [
      songsImage4,
        songsImage6,
        songsImage1,
        songsImage3,
        songsImage7,
        songsImage5,
        songsImage2,
    ],
}
