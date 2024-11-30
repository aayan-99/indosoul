import heroImage from '../assets/landing/images/heroimages/hero.jpg'

import live from '../assets/landing/images/offerings/live.png'
import soulSabha from '../assets/landing/images/offerings/soulSabha.png'
import roots from '../assets/landing/images/offerings/roots.png'
import music from '../assets/landing/images/offerings/music.png'
import flow from '../assets/landing/images/offerings/flow.png'

import liveLogo from '../assets/indosoul/icons/indosoulLiveLogo.png'
import soulLogo from '../assets/soulsabha/icons/soulSabhaLogo.png'
import rootsLogo from '../assets/indosoulroots/icons/indoSoulRootsLogo.png'
import flowLogo from '../assets/flow/icons/flowLogo.png'
import musicLogo from '../assets/academyofmusic/icons/academyOfMusicLogo.png'

import event_1 from '../assets/landing/images/events/event_1.png'
import event_2 from '../assets/landing/images/events/event_2.png'

import music_1 from '../assets/landing/images/galleryimages/01.png'
import music_2 from '../assets/landing/images/galleryimages/02.png'
import music_3 from '../assets/landing/images/galleryimages/03.png'
import music_4 from '../assets/landing/images/galleryimages/04.png'
import music_5 from '../assets/landing/images/galleryimages/05.png'
import music_6 from '../assets/landing/images/galleryimages/06.png'
import music_7 from '../assets/landing/images/galleryimages/07.png'
import music_8 from '../assets/landing/images/galleryimages/08.png'
import music_9 from '../assets/landing/images/galleryimages/09.png'
import music_10 from '../assets/landing/images/galleryimages/10.png'

import { EventsData, PopUpData } from '../types/landingPageTypes'
import { MusicianGalleryType } from '../types/globalTypes'


export const heroImages = [
  {
    id: 0,
    title: '',
    image: heroImage
  },
  {
    id: 1,
    title: '',
    image: heroImage
  },
];

export const ourOfferings: PopUpData[] = [
  {
    id: 0,
    image: live,
    logo: liveLogo,
    title: 'IndoSoul Live',
    content: [''],
    links: '/indo-soul-live',
    cardText: 'Live Contemporary music for every stage',
    buttonColor: 'liveRed',
  },
  {
    id: 1,
    image: soulSabha,
    logo: soulLogo,
    title: 'Soul Sabha',
    content: [''],
    links: '/soul-sabha',
    cardText: 'Unique listening experience of carnatic music',
    buttonColor: 'soulGreen',
  },
  {
    id: 2,
    image: roots,
    logo: rootsLogo,
    title: 'IndoSoul Roots',
    content: [''],
    links: '/indo-soul-roots',
    cardText: 'Original & independent compositions',
    buttonColor: 'rootsBrown',
  },
  {
    id: 3,
    image: music,
    logo: musicLogo,
    title: 'Academy Of Music',
    content: [''],
    links: '/indo-soul-music',
    cardText: 'Online & offline violin institute',
    buttonColor: 'musicBlue',
  },

  {
    id: 4,
    image: flow,
    logo: flowLogo,
    title: 'Flow',
    content: [''],
    links: '/flow',
    cardText: 'Music production house tailored to project requirements',
    buttonColor: 'flowGreen',
  },
];

export const events: EventsData[] = [
  {
    id: 0,
    event: "Indosoul event 08",
    venue: "Indosoul venue #8",
    image: event_1,
    date: "21st Nov'24",
    desc: "Dive into the rich tradition of Carnatic music, mastering foundational ragas, intricate talas, and improvisational techniques."
  },
  {
    id: 1,
    event: "Indosoul event 09",
    venue: "Indosoul venue #9",
    image: event_2,
    date: "15th Dec'24",
    desc: "Explore the fusion of Hindustani and Western classical music in this unique collaborative performance and workshop."
  },
  {
    id: 2,
    event: "Indosoul event 10",
    venue: "Indosoul venue #10",
    image: event_1,
    date: "5th Jan'25",
    desc: "Join us for an immersive experience in Bharatanatyam, learning intricate mudras, expressions, and choreography."
  },
  {
    id: 3,
    event: "Indosoul event 11",
    venue: "Indosoul venue #11",
    image: event_2,
    date: "18th Feb'25",
    desc: "Discover the rhythmic complexities of Tabla in this intensive workshop led by renowned percussionists."
  },
  {
    id: 4,
    event: "Indosoul event 12",
    venue: "Indosoul venue #12",
    image: event_1,
    date: "10th Mar'25",
    desc: "Experience the spiritual journey of Dhrupad, exploring its ancient techniques and meditative aspects."
  }
];

export const musicianGallery: MusicianGalleryType = {
  leftToRight: [
    music_1,
    music_2,
    music_8,
    music_3,
    music_4,
    music_5,
  ],
  rightToLeft: [
    music_6,
    music_7,
    music_8,
    music_9,
    music_2,
    music_10,
  ],
};