import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/hilton-garden-inn-saket/venue6.jpeg";

const reviews = [
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The property is just very beautiful and is the perfect to get married in and the best part is that their staff is very soft spoken and mannerable."
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
  "name": "Hilton Garden Inn New Delhi/Saket",
  "cityLocality": "Saket, New Delhi",
  "address": "A4, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, Delhi 110017, India",
  "phone": "+91-8375967071",
  "rating": 5,
  "reviewCount": 1,
  "tags": null,
  "starClassification": "4-star hotel",
  "vegetarianPrice": 1499,
  "nonVegetarianPrice": 1499,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "Hilton Garden Inn New Delhi/Saket is a contemporary wedding hotel in Saket District Centre, South Delhi, offering an indoor banquet hall ideal for intimate weddings and social gatherings.",
  "fullDescription": "The hotel has 115 guest rooms and an indoor banquet hall with 50 seating and 120 floating capacity. It offers in-house catering, in-house decor, in-house alcohol, and DJ services under one roof. India Grill serves Continental, Indian, and Chinese cuisine. Less than 50 pax functions are also permitted.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "12:00 PM - 12:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "No bride/groom changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Complimentary self-parking + complimentary valet parking"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Refundable 30 days prior"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "115 guest rooms available",
          "Suitable for residential weddings and guest stays"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Inhouse catering only",
          "Vegetarian and non-vegetarian catering available"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "In-house alcohol available"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "In-house decor available"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Indoor banquet hall available",
          "Less than 50 pax allowed for small functions",
          "In-house DJ available",
          "Capacity: 50–120 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "A4, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, Delhi 110017, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Hilton+Garden+Inn+New+Delhi+Saket,+Saket+District+Centre,+New+Delhi+110017&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=A4,+Saket+District+Centre,+District+Centre,+Sector+6,+Pushp+Vihar,+New+Delhi,+Delhi+110017,+India"
  },
  "heroImageFit": null
};

const HiltonGardenInnSaket = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default HiltonGardenInnSaket;
