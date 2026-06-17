import { WeddingData } from "../types/wedding";

// Helper to generate Google Calendar links
const generateGoogleCalendarLink = (
  title: string,
  details: string,
  location: string,
  startDateStr: string, // YYYYMMDDTHHMMSSZ
  endDateStr: string
) => {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
    location
  )}&dates=${startDateStr}/${endDateStr}`;
};

export const weddingData: WeddingData = {
  groom: {
    name: "Aarif Hussain A Nassar",
    parents: {
      father: "Nassar A",
      mother: "Kamaruneesa PM",
    },
    photo: "/images/groom-placeholder.png",
  },
  bride: {
    name: "Nafla Nazar",
    parents: {
      father: "Nazar T Y",
      mother: "Zeena Nazar",
    },
    photo: "/images/bride-placeholder.png",
  },
  events: {
    ceremony: {
      title: "Wedding Ceremony",
      date: "Saturday, September 19, 2026",
      time: "10:30 AM onwards",
      venue: "Nehru Memorial Town Hall, Mattancherry",
      mapsLink: "https://maps.app.goo.gl/GEztiAGfFt8v1tyN7",
      calendarLink: generateGoogleCalendarLink(
        "Wedding Ceremony: Aarif & Nafla",
        "Join us to celebrate the wedding ceremony of Aarif and Nafla.",
        "Nehru Memorial Town Hall, Mattancherry, Kochi",
        "20260919T050000Z", // 10:30 AM IST is 05:00 AM UTC
        "20260919T093000Z"  // 03:00 PM IST is 09:30 AM UTC
      ),
    },
    reception: {
      title: "Reception",
      date: "Saturday, September 19, 2026",
      time: "04:30 PM onwards",
      venue: "M K Convention Centre, Eramalloor",
      mapsLink: "https://maps.app.goo.gl/tWu7YcXcueXHyiHN9",
      calendarLink: generateGoogleCalendarLink(
        "Wedding Reception: Aarif & Nafla",
        "Join us to celebrate the wedding reception of Aarif and Nafla.",
        "M K Convention Centre, Eramalloor",
        "20260919T110000Z", // 04:30 PM IST is 11:00 AM UTC
        "20260919T163000Z"  // 10:00 PM IST is 04:30 PM UTC
      ),
    },
  },
  family: {
    groom: {
      father: "Nassar A",
      mother: "Kamaruneesa PM",
      siblings: [
        {
          name: "Ajmal Hussain A Nassar",
          spouse: "Jilsha Sara",
          children: ["Liam"],
        },
      ],
      address: [
        "Darul Hudha",
        "Thirumalahagom P.O",
        "Alappuzha",
      ],
    },
    bride: {
      father: "Nazar T Y",
      mother: "Zeena Nazar",
      siblings: [
        {
          name: "Nizam",
        },
      ],
      address: [
        "Thazhilaveetil (H)",
        "Chullickal",
        "Kochi",
      ],
    },
  },
  compliments: [
    { name: "Ajmal Hussain A Nassar & Jilsha" },
    { name: "Nizam" },
  ],
  gallery: [
    {
      id: 1,
      url: "/images/gallery-1.png",
      caption: "Sacred Union - The Rings",
    },
    {
      id: 2,
      url: "/images/gallery-2.png",
      caption: "Delicate Blooms - The Bouquet",
    },
    {
      id: 3,
      url: "/images/gallery-3.png",
      caption: "The Groom - Aarif",
    },
    {
      id: 4,
      url: "/images/gallery-4.png",
      caption: "The Bride - Nafla",
    },
    {
      id: 5,
      url: "/images/gallery-5.png",
      caption: "A Journey of Togetherness",
    },
    {
      id: 6,
      url: "/images/gallery-6.png",
      caption: "Golden Moments in Love",
    },
  ],
  contacts: [
    {
      label: "Contact Groom (1)",
      phone: "9349610823",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
    {
      label: "Contact Groom (2)",
      phone: "7736513036",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
    {
      label: "Contact Bride",
      phone: "9072415765",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
  ],
  initialWishes: [
    {
      id: "wish-1",
      name: "Faisal Rahman",
      message: "May Almighty Allah shower his blessings upon this wonderful couple. Wishing you a lifetime of joy, harmony, and eternal love. Mubarak!",
      date: "2026-06-17",
    },
    {
      id: "wish-2",
      name: "Sarah & Sameer",
      message: "Warmest congratulations, Aarif and Nafla! So thrilled to celebrate this beautiful day with you both. May your journey together be blessed.",
      date: "2026-06-17",
    },
    {
      id: "wish-3",
      name: "Dr. Anis Ahmed",
      message: "May your marriage be as beautiful as the bond you share, filled with patience, understanding, and love. Congratulations to both families!",
      date: "2026-06-17",
    },
  ],
};
