export interface Person {
  name: string;
  parents: {
    father: string;
    mother: string;
  };
  photo: string;
}

export interface Sibling {
  name: string;
  spouse?: string;
  children?: string[];
}

export interface FamilyInfo {
  father: string;
  mother: string;
  siblings?: Sibling[];
  address: string[];
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  mapsLink: string;
  calendarLink?: string;
}

export interface Compliment {
  name: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface ContactPerson {
  label: string;
  side?: string;
  phone: string;
  whatsappText: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

export interface WeddingData {
  groom: Person;
  bride: Person;
  events: {
    ceremony: WeddingEvent;
    reception: WeddingEvent;
  };
  family: {
    groom: FamilyInfo;
    bride: FamilyInfo;
  };
  compliments: Compliment[];
  gallery: GalleryItem[];
  contacts: ContactPerson[];
  initialWishes: Wish[];
}
