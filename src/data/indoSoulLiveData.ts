import aikiyambg from '../assets/indosoul/images/experienceCards/01.png'
import third from '../assets/indosoul/images/experienceCards/02.png'
import fourth from '../assets/indosoul/images/experienceCards/03.png'

import karthik from '../assets/indosoul/images/musicianCarousal/karthik.png'
import ramkumar from '../assets/indosoul/images/musicianCarousal/ramkumar.png'
import reshwin from '../assets/indosoul/images/musicianCarousal/reshwin.png'
import vikram from '../assets/indosoul/images/musicianCarousal/vikram.png'
import akshay from '../assets/indosoul/images/musicianCarousal/akshay.png'
import venkat from '../assets/indosoul/images/musicianCarousal/venkat.png'

import music_1 from '../assets/indosoul/images/gallery/01.png'
import music_2 from '../assets/indosoul/images/gallery/02.jpg'
import music_3 from '../assets/indosoul/images/gallery/03.jpg'
import music_4 from '../assets/indosoul/images/gallery/04.jpg'
import music_5 from '../assets/indosoul/images/gallery/05.webp'
import music_6 from '../assets/indosoul/images/gallery/06.jpg'
import music_7 from '../assets/indosoul/images/gallery/07.webp'
import music_8 from '../assets/indosoul/images/gallery/08.jpg'

import heroImageIndosoulLive from '../assets/indosoul/images/hero_landing.jpg'

import aikiyamLogo from '../assets/indosoul/icons/aikyam.png'
import ensambleLogo from '../assets/indosoul/icons/ensemble.png'
import indoSoulLogo from '../assets/indosoul/icons/indosoul.png'

import { ExperienceDataType, OurCareerDataType } from '../types/indoSoulLiveType'
import { MusicianGalleryType } from '../types/globalTypes'


export const heroImages = [
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

export const experienceData: ExperienceDataType[] = [
    {
        id: 0,
        title: 'Akiyam',
        cardText: 'Muhurthams by Indosoul',
        image: aikiyambg,
        logo: aikiyamLogo,
        heading: 'Infusing a sacred sense of spirit and divinity into muhurthams and other traditional celebrations through music',
        content: [
            `Amidst the happy chatter of your family and friends, strong and loud 'Naadaswaram' notes pierce and waft through the gathering accompanied by bold 'Thavil' beats to create the perfect backdrop-as both of you join hands to stick to each other through thick and thin.  Running parallel to the traditional notes are IndoSoul's modern touches… All these seemingly disparate elements come together and blend into one beautiful sound… As you both become one. An experience of oneness or 'Aikyam'.`,
            `The experience includes:`,
            `An ensemble of 4-8 accomplished musicians consisting of vocalists, violinists, keyboardists, guitarists, traditional and modern percussionists and experienced 'Naadaswaram' and 'Thavil' players`,
            `A spectacular musical experience for up to 90 minutes`,
            `A sound engineer to ensure optimal audio quality`,
            `A playlist of songs chosen carefully to align with the rituals/traditions`,
            `A unique musical film capturing your special moments, the rituals, the live performance, family and friends sharing your love and joy-a keepsake from us to you`,
        ],
        links: ' https://www.youtube.com/watch?v=BMUCeFOK0N0'
    },
    {
        id: 1,
        title: 'IndoSoul',
        cardText: 'Weddings by Indosoul',
        image: third,
        logo: indoSoulLogo,
        heading: null,
        content: [
            `You are all set to take your next big step… And, what better than to celebrate it musically with all your loved ones by your side? From the enthusiastic folks on the dance floor the minute they hear a beat to the reluctant ones shaking an arm or two to group performances-IndoSoul promises to infuse vibrancy and energy into these experiences in its signature music style.`,
            `With expertise in different genres of music, IndoSoul would present exceptional medleys that span decades and styles. Right from the 1960s to now, from MSV to ARR to Elvis Presley, from the traditional classical songs to the popular music, we offer them all.`,
            `The experience includes:`,
            `Up to 6 exceptional musicians, which include instruments such as violin, lead, acoustic and bass guitars, drums, mridangam and vocals`,
            `Live music for a duration of 90-120 minutes`,
            `Pre-event consultation`,
            `A special musical film capturing the live performance`,
            `An exclusive 3-minute song performed by Karthick Iyer live (included in your special musical film)`,
        ],
        links: 'https://www.youtube.com/watch?v=GSqdRX95quA'
    },
    {
        id: 2,
        title: 'IndoSoul Ensemble',
        cardText: 'Corporate shows by Indosoul',
        image: fourth,
        logo: ensambleLogo,
        heading: 'The Perfect Symphony for Every event of Your 3 day Grand Indian Wedding ',
        content: [
            `You are unique and so is your story of love. Your journey of coming together with your special someone would be set to tune accompanied by the right beats-right from the first time you met to the day you decided to start a journey together. Your very own unique or 'Adwitiya' musical recorded for posterity. Not just the music but the sound and lighting effects would be customised to narrate your story in a unique manner.`,
            `The experience includes:`,
            `With 16 talented musicians featuring 'Aikyam', 'Aarohana' and 'Laya' and covering all the days of your wedding, 'Adwitiya' elevates your celebrations matching them note to note, beat to beat`,
            `Pre-wedding consultation to understand your story of love and your musical preferences and a customised setlist`,
            `Your unique musical film based on your story, the live performances and footages of the celebrations-presented as a special memento`,
            `An exclusive 3-minute song composed by IndoSoul and performed by Karthick Iyer at your wedding (also included in your wedding musical)`,

        ],
        links: 'https://www.youtube.com/watch?v=LBjgxQgHxxY'
    },
];

export const ourCareerData: OurCareerDataType = {
    experience: [
        {
            id: 0,
            amount: 1000,
            title: 'shows',
        },
        {
            id: 1,
            amount: 20,
            title: 'views',
        },
        {
            id: 2,
            amount: 150,
            title: 'followers',
        },
        {
            id: 3,
            amount: 10,
            title: 'years',
        },
    ],
    musicians: [
        {
            id: 0,
            image: karthik,
            title: 'KARTHICK IYER',
            about: 'Karthick Iyer, frontman of IndoSoul has been playing the violin since the age of 8. One of the pioneers in the usage of electric violin in the Indian music scene, his vision is to take Indian classical music to a global audience. He has performed across the world in countries like US, Canada, UK, Australia, etc including iconic shows like Later with Jools Holland BBC, Glastonbury festival, MTV Coke Studio to mention a few. He has curated and released four original albums with IndoSoul apart from playing for film music directors like A.R. Rahman, Harris Jayaraj, Anirudh, Imman, etc.',
        },
        {
            id: 1,
            image: reshwin,
            title: 'RESHWIN NISHITH',
            about: 'Reshwin has been playing the bass professionally for more than a decade. He has worked with various artists such as Devi Sri Prasad, Chinmayi & Suresh Peters. He is a part of El Fe, the vocal group that performs for artists like A.R. Rahman, Anirudh, D.Imman, and more.',
        },
        {
            id: 2,
            image: ramkumar,
            title: 'RAMKUMAR KANAKARAJAN',
            about: 'Ramkumar has been getting his audience to groove to his beats for over 20 years. He has collaborated with legends like A.R. Rahman, Drums Sivamani and big names like Sid Sriram and Anirudh. He also topped the exams conducted by the Trinity College of Music, London.',
        },
        {
            id: 3,
            image: venkat,
            title: 'VENKAT SUBRAMANIAN',
            about: 'More famously known as Mr. Mridangam in his social circles, hails from a family of artists and started learning Mridangam professionally from when he was thirteen. He specialises not onyl in Mridangam, but also in other precussion instruments like the Morsing, Ghanjeera, Ghatam, Tavil etc. He accompanies as a precussionist and has travelled across India and other countries like Sri Lanka, UAE, Cambodia and Singapore for private concerts. ',
        },
        {
            id: 4,
            image: vikram,
            title: 'VIKRAM VIVEKANAND',
            about: 'Vikram has been in the Chennai music scene for over 15 years now. He has toured extensively with his band Grey Shack, and with La Pongal, Yodhakaa and Junkyard Groove. He has also performed for musicians like Usha Uthup and Shantanu Moitra (MTV Coke Studio) and music directors Harris Jayaraj, K, and Deepak Dev.',
        },
        {
            id: 5,
            image: akshay,
            title: 'AKSHAY YESODHARAN',
            about: 'A trained singer, guitarist and music composer with foundation in Western Classical Piano from the KM Music Conservatory, Akshay Yesodharan has been a professional musician for the past ten years. He has toured with Mr. A.R. Rahman as part ten years. He has toured with Mr. A.R. Rahman as part of his KMMC Chamber Choir, in India as well as Germany for the Bollywood dreams four. His recent works for the South Indian film industry include the background score for a Tamil and Telegu film and vocals for a Tamil web series called The Story of Things.',
        },
    ],
};

export const musicianGallery: MusicianGalleryType = {
    leftToRight: [
        music_1,
        music_2,
        music_3,
        music_4,
        music_5,
        music_6,
    ],
    rightToLeft: [
        music_5,
        music_7,
        music_8,
        music_6,
        music_4,
        music_7,
    ],
};