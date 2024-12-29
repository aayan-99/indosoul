import karthik from '../assets/aboutus/images/musicians/karthik.png'
import reshwin from '../assets/aboutus/images/musicians/reshwin.png'
import vikram from '../assets/aboutus/images/musicians/vikram.png'
import ram from '../assets/aboutus/images/musicians/ram.png'
import akshay from '../assets/aboutus/images/musicians/akshay.png'
import venkat from '../assets/aboutus/images/musicians/venkat.png'

import kaushik from '../assets/aboutus/images/team/kaushik.png'
import reshwinTeam from '../assets/aboutus/images/team/reshwin.png'
import jayashree from '../assets/aboutus/images/team/jayashree.png'
import anjana from '../assets/aboutus/images/team/anjana.png'
import aditya from '../assets/aboutus/images/team/aditya.png'
import sabari from '../assets/aboutus/images/team/sabari.png'
import avinash from '../assets/aboutus/images/team/avinash.png'

import firstLive from '../assets/aboutus/images/timeline/2013.png'
import firstLaunch from '../assets/aboutus/images/timeline/2015_new album.png'
import canadaTour from '../assets/aboutus/images/timeline/2017_canada_tour.png'
import pallaviShift from '../assets/aboutus/images/timeline/2017_pallavi_shift.png'
import karma from '../assets/aboutus/images/timeline/2018_TSOK.png'
import equilibrium from '../assets/aboutus/images/timeline/2023_equilibrium.png'
import karthikViolin from '../assets/aboutus/images/timeline/2024_karthik_US_tour.png'
import year_2019 from '../assets/aboutus/images/timeline/2019.png'
import year_2016 from '../assets/aboutus/images/timeline/2016_min.png'
import colombo from '../assets/aboutus/images/timeline/2017_colombo.png'
import suratkal from '../assets/aboutus/images/timeline/2017_NIT.png'
import twoSides from '../assets/aboutus/images/timeline/2018_two_sides.png'

import { AboutUsDetailsType, OurJourneyType } from "../types/aboutUsTypes";

export const musiciansData: AboutUsDetailsType[] = [
  {
    id: 0,
    name: 'Karthick Iyer',
    designation: 'Frontman & Creative Head',
    image: karthik,
  },
  {
    id: 1,
    name: 'Reshwin Nishith',
    designation: 'Bass Guitarist, Programmer',
    image: reshwin,
  },
  {
    id: 2,
    name: 'Vikram Vivekanand',
    designation: 'Lead Guitarist',
    image: vikram,
  },
  {
    id: 3,
    name: 'Ram Kanakaraj',
    designation: 'Drummer',
    image: ram,
  },
  {
    id: 4,
    name: 'Akshay Yesodharan',
    designation: 'Acoustic Guitarist',
    image: akshay,
  },
  {
    id: 5,
    name: 'Venkat Subramanian',
    designation: 'Mridangist, Percussionist',
    image: venkat,
  },
];

export const teamData: AboutUsDetailsType[] = [
  {
    id: 0,
    name: 'Kaushik Ravi',
    designation: 'Head - Brand Operations',
    image: kaushik,
  },
  {
    id: 1,
    name: 'Jayashree Ramamoorthy',
    designation: 'Head - Marketing',
    image: jayashree,
  },
  {
    id: 2,
    name: 'Reshwin Nishith',
    designation: 'Head - Music Production',
    image: reshwinTeam,
  },
  {
    id: 3,
    name: 'Anjana Shivshankari',
    designation: 'Manager - Client Success',
    image: anjana,
  },
  {
    id: 4,
    name: 'Aditya',
    designation: 'Lead - Indosoul Academy',
    image: aditya,
  },
  {
    id: 5,
    name: 'Sabari',
    designation: 'Sound Engineer',
    image: sabari,
  },
  {
    id: 6,
    name: 'Avinash Murugadhas',
    designation: 'Video Content Producer',
    image: avinash,
  },
];

export const journeyData: OurJourneyType[] = [
  {
    id: 1,
    year: '2013',
    image: firstLive,
    description: 'First live band performance',
    tour: 'First live band performance',
  },
  {
    id: 2,
    year: '2015',
    image: firstLaunch,
    description: 'First Album Launch - Looking Within to Look Beyond',
    tour: 'First Album Launch',
  },
  {
    id: 3,
    year: '2016',
    image: year_2016,
    description: '-',
    tour: '-',
  },
  {
    id: 4,
    year: '2017',
    image: canadaTour,
    description: 'USA - Canada Tour',
    tour: 'USA-Canada Tour',
  },
  {
    id: 5,
    year: '2017',
    image: colombo,
    description: `Colombo`,
    tour: 'colombo',
  },
  {
    id: 6,
    year: '2017',
    image: suratkal,
    description: `NIT Suratakal`,
    tour: 'NIT Suratkal',
  },
  {
    id: 7,
    year: '2017',
    image: pallaviShift,
    description: 'Second Album Launch - The Pallavi Shift',
    tour: 'Second Album Launch',
  },
  {
    id: 8,
    year: '2018',
    image: karma,
    description: 'Third Album Launch - Two Sides of Karma',
    tour: 'Third Album Launch',
  },
  {
    id: 9,
    year: '2018',
    image: twoSides,
    description: `Two Sides`,
    tour: `Two Sides`,
  },
  {
    id: 10,
    year: '2019',
    image: year_2019,
    description: `-`,
    tour: '-',
  },
  {
    id: 11,
    year: '2023',
    image: equilibrium,
    description: `Fourth Album Launch - Equilibrium`,
    tour: 'Fourth Album Launch',
  },
  {
    id: 12,
    year: '2024',
    image: karthikViolin,
    description: `Karthick Iyer USA Tour for Violin Intensive`,
    tour: 'Violin Intensive',
  },
];