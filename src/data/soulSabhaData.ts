import { ArtistDataType, DescriptionDataType, SeasonTwoDataType, SocialMediaDataType, SoulSabhaExperienceDataType, SoulSabhaHeroImagesType } from '../types/soulSabhaTypes'
import heroImg1 from '../assets/soulsabha/images/heroimages/heroImage1.png'
import heroImg2 from '../assets/soulsabha/images/heroimages/heroImage2.jpg'
import heroImg3 from '../assets/soulsabha/images/heroimages/heroImage3.jpg'


import songsImageSingle1 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-01_1000px.jpg'
import songsImageSingle2 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-02_1000px.jpg'
import songsImageSingle3 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-03_1000px.jpg'
import songsImageSingle4 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-04_1000px.jpg'
import songsImageSingle5 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-05_1000px.jpg'
import songsImageSingle6 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-06_1000px.jpg'
import songsImageSingle7 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-07_1000px.jpg'

import liveConcerts1 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-01_1000px.jpg'
import liveConcerts2 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-02_1000px.jpg'
import liveConcerts3 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-03_1000px.jpg'
import liveConcerts4 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-04_1000px.jpg'
import liveConcerts5 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-05_1000px.jpg'

import visualArtsImageSingle1 from '../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-01_1000px.jpg'
import visualArtsImageSingle2 from '../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-02_1000px.jpg'
import visualArtsImageSingle3 from '../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-03_1000px.jpg'
import visualArtsImageSingle4 from '../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-04_1000px.jpg'
import visualArtsImageSingle5 from '../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-05_1000px.jpg'

import exp_2 from '../assets/soulsabha/images/artists/vertical_images/01.png';
import exp_3 from '../assets/soulsabha/images/artists/vertical_images/02.png';
import exp_4 from '../assets/soulsabha/images/artists/vertical_images/03.png';

import galleryImage1 from '../assets/soulsabha/images/gallery/01.png'
import galleryImage2 from '../assets/soulsabha/images/gallery/02.png'
import galleryImage3 from '../assets/soulsabha/images/gallery/03.png'
import galleryImage4 from '../assets/soulsabha/images/gallery/04.png'
import galleryImage5 from '../assets/soulsabha/images/gallery/05.png'
import galleryImage6 from '../assets/soulsabha/images/gallery/06.png'
import galleryImage7 from '../assets/soulsabha/images/gallery/07.png'
import galleryImage8 from '../assets/soulsabha/images/gallery/08.png'
import galleryImage9 from '../assets/soulsabha/images/gallery/09.png'

import instagramDark from '../assets/icons/instagram_dark.svg'
import facebookDark from '../assets/icons/facebook_dark.svg'
import spotifyDark from '../assets/icons/spotify_dark.svg'
import youtubeDark from '../assets/icons/youtube_dark.svg'
import appleMusic from '../assets/icons/appleMusic.svg'

import mic from '../assets/soulsabha/icons/soulSabhaMic.svg'
import hear from '../assets/soulsabha/icons/soulSabhaHear.svg'
import speaker from '../assets/soulsabha/icons/soulSabhaSpeaker.svg'
import rupee from '../assets/soulsabha/icons/soulSabhaRupee.svg'

import artist_1 from '../assets/soulsabha/images/artists/square-images/01.png'
import artist_2 from '../assets/soulsabha/images/artists/square-images/02.png'
import artist_3 from '../assets/soulsabha/images/artists/square-images/03.png'
import artist_4 from '../assets/soulsabha/images/artists/square-images/04.png'
import artist_5 from '../assets/soulsabha/images/artists/square-images/05.png'

import { GalleryImagesType } from '../types/globalTypes'

export const soulSabhaHeroImages: SoulSabhaHeroImagesType[] = [
    {
        id: 0,
        image: heroImg1,
        title: '',
    },
    {
        id: 1,
        image: heroImg2,
        title: '',
    },
    {
        id: 2,
        image: heroImg3,
        title: '',
    },
];

export const soulSabhaGalleryImages: GalleryImagesType = {
    listiningSongsImages: [
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
    ],
    visualArtsImages: [
        galleryImage6,
        galleryImage7,
        galleryImage8,
        galleryImage9,
        galleryImage2,
    ],
};

export const descriptionData: DescriptionDataType[] = [
    {
        id: 0,
        desc: 'Soul Sabha is a special musical video concept by IndoSoul that seeks to take our age old Carnatic music across to a wider audience and younger generations.',
    },
    {
        id: 1,
        desc: 'We aim to create a space where traditional music blends with global influences while preserving its essence and integrity culminating in a unique musical experience. Our vision is to bridge cultural divides and celebrate the rich heritage of Indian music, especially through the lens of South Indian traditions.',
    },
    {
        id: 2,
        desc: `Soul Sabha is all about collaborations with artist and musicians from the traditional space from all over India, SoulSabha isn't just   about music—it's about building a community of artists and music enthusiasts.`,
    },
];

export const soulSabhaExperienceData: SoulSabhaExperienceDataType[] = [
    {
        id: 0,
        image: exp_2,
        title: 'Listening Sessions',
        content: [songsImageSingle1, songsImageSingle2, songsImageSingle3, songsImageSingle4, songsImageSingle5, songsImageSingle6, songsImageSingle7],
        links: '',
    },
    {
        id: 1,
        image: exp_3,
        title: 'Live Concerts',
        content: [liveConcerts1, liveConcerts2, liveConcerts3, liveConcerts4, liveConcerts5],
        links: '',
    },
    {
        id: 2,
        image: exp_4,
        title: 'Music & Visual Arts',
        content: [visualArtsImageSingle1, visualArtsImageSingle2, visualArtsImageSingle3, visualArtsImageSingle4, visualArtsImageSingle5],
        links: '',
    },
];

export const seasonTwoData: SeasonTwoDataType = {
    intro: [
        {
            id: 0,
            text: 'Join us for the upcoming season of Soul Sabha featuring collaborations with talented artists from across India. Stay tuned for our schedule of listening sessions, live concerts by following us on social media platforms and subscribe to our newsletter.',
        },
        {
            id: 2,
            text: 'Become a part of the SS Community and join us as we celebrate the timeless beauty of Indian Classical music in our unique way!',
        },
    ],
    seasonContent: [
        {
            id: 0,
            title: 'Performer',
            icon: mic,
            link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
        },
        {
            id: 1,
            title: 'Sponsor',
            icon: rupee,
            link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
        },
        {
            id: 2,
            title: 'Listener',
            icon: hear,
            link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
        },
        {
            id: 3,
            title: 'CREW',
            icon: speaker,
            link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
        },
    ],
};

export const socialMediaData: SocialMediaDataType[] = [
    {
        id: 0,
        logo: appleMusic,
        link: 'https://music.apple.com/us/album/soul-sabha-season-1/1722636807',
        title: 'Apple Music'
    },
    {
        id: 1,
        logo: instagramDark,
        link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
        title: 'Instagram'
    },
    {
        id: 2,
        logo: spotifyDark,
        link: 'https://open.spotify.com/album/7GMW8oc7PfUdfsQ0TJKshN?si=hoUsHsFbQF2M7o3laMzRyw',
        title: 'Spotify'
    },
    {
        id: 3,
        logo: youtubeDark,
        link: 'https://youtu.be/QehzWUHyQcU?si=Jy058Rf-5PKSvmTJ',
        title: 'Youtube'
    },
    {
        id: 4,
        logo: facebookDark,
        link: 'https://www.facebook.com/indosoullive?mibextid=hu50Ix',
        title: 'Facebook'
    },
];

export const artistData: ArtistDataType[] = [
  {
    id: 0,
    image: artist_1,
    title: 'Spoorthi Rao',
    season: 'season 01',
    youtubeLink: 'https://www.youtube.com/watch?v=bdX7KfQu0p8&list=PLribYRRTKTxcUsNldh4iCF2Gy9ekuSdUa&index=4',
    spotifyLink: 'https://open.spotify.com/track/5CSX21Md8WlpmzrteSFqPO',
  },
  {
    id: 1,
    image: artist_3,
    title: 'Haricharan Seshadri',
    season: 'season 01',
    youtubeLink: 'https://www.youtube.com/watch?v=Dt2AkS5DoHY&list=PLribYRRTKTxcUsNldh4iCF2Gy9ekuSdUa&index=5',
    spotifyLink: 'https://open.spotify.com/track/4REdO2XFp4pomPGZF63vGX',
  },
  {
    id: 2,
    image: artist_4,
    title: 'Abinaya Shenbagaraj',
    season: 'season 01',
    youtubeLink: 'https://www.youtube.com/watch?v=N0jsmE_iFnU&list=PLribYRRTKTxcUsNldh4iCF2Gy9ekuSdUa&index=3',
    spotifyLink: 'https://open.spotify.com/track/4tzbYj16iP6p0ocFMcvvDl',
  },
  {
    id: 3,
    image: artist_2,
    title: 'Trichur Brothers',
    season: 'season 01',
    youtubeLink: 'https://www.youtube.com/watch?v=QehzWUHyQcU&list=PLribYRRTKTxcUsNldh4iCF2Gy9ekuSdUa&index=1',
    spotifyLink: 'https://open.spotify.com/track/27jpO7PDlDKsIgfHdaB9Zx',
  },
  {
    id: 4,
    image: artist_5,
    title: 'Rajhesh Vaidhya',
    season: 'season 01',
    youtubeLink: 'https://www.youtube.com/watch?v=cK4L_uCGwuU',
    spotifyLink: 'https://open.spotify.com/track/76cHuSlONwEP9dlKpvv8NA',
  },
];