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
      time: "11:30 AM",
      venue: "Nehru Memorial Town Hall, Mattancherry",
      mapsLink: "https://maps.app.goo.gl/GEztiAGfFt8v1tyN7",
      calendarLink: generateGoogleCalendarLink(
        "Wedding Ceremony: Aarif & Nafla",
        "Join us to celebrate the wedding ceremony of Aarif and Nafla.",
        "Nehru Memorial Town Hall, Mattancherry, Kochi",
        "20260919T060000Z", // 11:30 AM IST is 06:00 AM UTC
        "20260919T103000Z"  // 04:00 PM IST is 10:30 AM UTC
      ),
    },
    reception: {
      title: "Reception",
      date: "Saturday, September 19, 2026",
      time: "05:00 PM",
      venue: "M K Convention Centre, Eramalloor",
      mapsLink: "https://maps.app.goo.gl/tWu7YcXcueXHyiHN9",
      calendarLink: generateGoogleCalendarLink(
        "Wedding Reception: Aarif & Nafla",
        "Join us to celebrate the wedding reception of Aarif and Nafla.",
        "M K Convention Centre, Eramalloor",
        "20260919T113000Z", // 05:00 PM IST is 11:30 AM UTC
        "20260919T163000Z"  // 10:00 PM IST is 04:30 PM UTC
      ),
    },
  },
  family: {
    groom: {
      father: "Nassar A",
      mother: "Kamaruneesa PM",
      siblings: [
        { name: "Ajmal Hussain A Nassar" },
        { name: "Jilsha Sara" },
        { name: "Liam" },
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
          name: "Mohammed Nizam",
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
    { name: "Ajmal Hussain A Nassar\nJilsha Sara Varghese\nMohammed Nizam\nLiam Zayn" },
  ],
  gallery: [
    {
      id: 1,
      url: "/images/engagement.jpeg",
      caption: "Our Engagement",
    },
  ],
  contacts: [
    {
      label: "Nassar",
      side: "Groom's Side",
      phone: "9349610823",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
    {
      label: "Ajmal",
      side: "Groom's Side",
      phone: "7736513036",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
    {
      label: "Mohammed Nizam",
      side: "Bride's Side",
      phone: "9072415765",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
    {
      label: "Nazar TY",
      side: "Bride's Side",
      phone: "9072415760",
      whatsappText: "Assalamu Alaikum. Regarding the wedding of Aarif & Nafla:",
    },
  ],
  initialWishes: [],
};
