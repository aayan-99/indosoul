import heroImage from '../assets/flow/images/flowHero.jpg'

import catalogImage1 from '../assets/flow/images/catalogImages/01.png'
import catalogImage2 from '../assets/flow/images/catalogImages/02.png'
import catalogImage3 from '../assets/flow/images/catalogImages/03.png'
// import catalogImage4 from '../assets/flow/images/catalogImages/04.png'
import { CatalogDataType, DescriptionDataType, FlowHeroImagesType } from '../types/flowTypes'

export const flowHeroImages: FlowHeroImagesType[] = [
  {
    id: 0,
    image: heroImage,
    title: ''
  },
  {
    id: 1,
    image: heroImage,
    title: '',
  },
]

export const descriptionData: DescriptionDataType[] = [
  {
    id: 0,
    desc: 'We are a music production company specializing in comprehensive musical services tailored to meet all client project requirements.',
  },
  {
    id: 1,
    desc: `With our skilled & experienced in-house team of musicians, arrangers, sound engineers, and mixing and mastering experts, we bring to life the director's vision with precision and creativity. Our portfolio includes compositions for advertising jingles, individual singles, anthems, corporate movies as well as complete movie scores and soundtracks.`,
  },
];

export const catalogData: CatalogDataType[] = [
  {
    id: 2,
    image: catalogImage3,
    title: 'Ad Jingles',
    content: '',
    links: '',
  },
  {
    id: 1,
    image: catalogImage2,
    title: 'Podcasts',
    content: '',
    links: '',
  },
  {
    id: 0,
    image: catalogImage1,
    title: 'Films',
    content: '',
    links: '',
  },
];