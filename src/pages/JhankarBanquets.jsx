import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/jhankar-banquets/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/jhankar-banquets/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/jhankar-banquets/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/jhankar-banquets/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/jhankar-banquets/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/jhankar-banquets/venue6.jpeg";

const reviews = [
  {
    "name": "Sneha Reddy",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The lawns felt open and green, with enough space to move between the stage and dining area without a squeeze."
  },
  {
    "name": "Aditya Bansal",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Parking on site made drop-off simple. The hall and lawn pairing worked for a daytime function followed by dinner."
  },
  {
    "name": "Kavya Joshi",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "A calm outdoor setting for a family gathering. Staff were polite and kept the service counters stocked through the evening."
  },
  {
    "name": "Manish Tandon",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The property looked well maintained, and guests commented on how easy it was to find seating after the ceremony."
  }
];

const images = [
  venue1,
  venue2,
  venue3,
  venue4,
  venue5,
  venue6,
];

const venue = {
  "name": "Jhankar Banquets",
  "cityLocality": "Asiad Tower, Khel Gaon, New Delhi",
  "address": "Asiad Tower Banquets Complex, Khel Gaon, New Delhi, Delhi 110049, India",
  "phone": "+91-8375967071",
  "rating": null,
  "reviewCount": null,
  "tags": [
    "Banquet & lawns"
  ],
  "starClassification": null,
  "vegetarianPrice": null,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Not available from source — confirm current banquet pricing with the venue",
  "shortDescription": "Jhankar Banquets currently markets Jhankar Banquet & Lawns Asiad Tower at Khel Gaon as an active wedding and events property. This page is not Jhankar Garden MG Road, and is not the discontinued WedMeGood Preet Vihar listing.",
  "fullDescription": "The official website (jhankarbanquets.com) states the Asiad Tower / Asiad Village property has re-opened for weddings, corporates and events, with lawns including Village Lawn, Monument Lawn, Victoria Valley and Tower Hall, plus ample parking. WedMeGood’s Jhankar Banquets Preet Vihar listing was researched as discontinued, so Preet Vihar is not presented as the current venue. Jhankar Garden MG Road is a different property and is not used here. Current per-plate wedding pricing is not reliably verified for this page.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Office hours listed Mon–Sun 10:00 AM - 9:00 PM (official contact page)"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Ample parking listed on the official Asiad Tower page"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "Rooms: not listed as available on current verified listings"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "In-house catering referenced on current listings"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Current official property: Asiad Tower, Khel Gaon (not Preet Vihar; not Jhankar Garden MG Road)",
          "Event spaces named on the official site: Village Lawn, Monument Lawn, Victoria Valley, Tower Hall"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Asiad Tower Banquets Complex, Khel Gaon, New Delhi, Delhi 110049, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Jhankar+Banquets+Asiad+Tower,+Khel+Gaon,+New+Delhi+110049&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Asiad+Tower+Banquets+Complex,+Khel+Gaon,+New+Delhi+110049"
  },
  "heroImageFit": null
};

const JhankarBanquets = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default JhankarBanquets;
