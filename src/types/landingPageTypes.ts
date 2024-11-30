export interface PopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: string[] | number[] | any;
  links?: string;
  cardText?: string;
  buttonColor?: string;
}

export interface EventsData {
  id: number;
  event: string;
  venue: string;
  image: string;
  date: string;
  desc: string;
}