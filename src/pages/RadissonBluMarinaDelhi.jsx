import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/radisson-blu-marina-delhi/venue6.jpeg";

const reviews = [];

const images = [
  venue1,
  venue2,
  venue3,
  venue4,
  venue5,
  venue6,
];

const venue = {
  "name": "Radisson Blu Marina Hotel, Delhi Connaught Place",
  "cityLocality": "Connaught Place, New Delhi",
  "address": "G-59, Connaught Place, New Delhi, Delhi 110001, India",
  "phone": "+91 11 4690 9090",
  "rating": null,
  "reviewCount": 0,
  "tags": null,
  "starClassification": "4-star hotel",
  "vegetarianPrice": null,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Price on request",
  "shortDescription": "Radisson Blu Marina Hotel Connaught Place is a 4-star wedding hotel in the heart of Connaught Place, New Delhi, offering indoor banquet spaces for wedding celebrations.",
  "fullDescription": "The venue offers indoor event spaces with seating for about 280 guests and overall capacity of 280–400 pax. It has 12 guest rooms for wedding parties, in-house catering, panel decorators, parking space, and event facilities in central Connaught Place.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "9:00 AM - 11:30 PM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "No A/C changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Valet parking available + parking for 60 vehicles"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Non-cancellable"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "12 guest rooms available",
          "Suitable for wedding guest stays"
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
          "In-house alcohol available",
          "Outside alcohol permitted"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Decorators from panel only"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Indoor banquet spaces available",
          "In-house DJ available; outside DJ permitted",
          "Capacity: 280–400 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "G-59, Connaught Place, New Delhi, Delhi 110001, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Radisson+Blu+Marina+Hotel,+Connaught+Place,+New+Delhi+110001&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=G-59,+Connaught+Place,+New+Delhi,+Delhi+110001,+India"
  },
  "heroImageFit": null
};

const RadissonBluMarinaDelhi = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default RadissonBluMarinaDelhi;
