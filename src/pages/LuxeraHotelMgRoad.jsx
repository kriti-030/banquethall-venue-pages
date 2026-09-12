import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/luxera-hotel-mg-road/venue6.jpeg";

const reviews = [
  {
    "name": "Pooja Iyer",
    "verified": false,
    "rating": 5,
    "review": "The lawn looked fresh for an outdoor ceremony, and the indoor banquet stayed comfortable once guests moved in for dinner."
  },
  {
    "name": "Varun Khanna",
    "verified": false,
    "rating": 5,
    "review": "Rooms on the property helped visiting relatives. The kitchen team offered enough vegetarian and non-vegetarian options."
  },
  {
    "name": "Anjali Rao",
    "verified": false,
    "rating": 5,
    "review": "Terrace seating was pleasant in the evening. Staff guided guests between spaces without confusion."
  },
  {
    "name": "Siddharth Jain",
    "verified": false,
    "rating": 4,
    "review": "A hotel banquet that still felt personal for a mid-size gathering. Parking was available close to the entrance."
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
  "name": "Luxera Hotel MG Road",
  "cityLocality": "Aya Nagar, New Delhi",
  "address": "Mehrauli-Gurgaon Rd, near Arjan Garh, Aya Nagar, New Delhi, Delhi 110047, India",
  "phone": "+91-8375967071",
  "rating": 4.7,
  "reviewCount": 11,
  "tags": [
    "Hotel & banquet"
  ],
  "starClassification": null,
  "vegetarianPrice": 2500,
  "nonVegetarianPrice": 2700,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "WedMeGood vegetarian ₹2,500/plate and non-vegetarian ₹2,700/plate (primary source; VenueMonk non-veg ₹3,500 not used)",
  "shortDescription": "Luxera Hotel MG Road is a hotel banquet venue near Arjan Garh / Aya Nagar with indoor, outdoor and terrace spaces, 15 rooms and multiple event areas.",
  "fullDescription": "WedMeGood (primary pricing source) lists 4.7/5 from 11 reviews, vegetarian ₹2,500 and non-vegetarian ₹2,700 per plate, capacity about 40–1,000, 15 rooms and 7 event spaces including IRIS, Victoria ballroom with lawn, glass house with lawn, and Royal decks. VenueMonk lists a conflicting non-veg price of ₹3,500; that figure is not shown here.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings",
        "icon": "⏰",
        "items": [
          "Morning: 10:00 AM – 4:00 AM",
          "Evening: 6:00 PM – 4:00 AM",
          "Venue closes: 4:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "1 complimentary AC changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Parking available for up to 500 vehicles",
          "Valet parking available"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Cancellable",
          "30% deduction on cancellation"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Venue-provided food",
          "Outside caterer not allowed"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Alcohol allowed",
          "Outside alcohol not allowed",
          "Corkage applicable"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Venue-provided decor",
          "Outside decorators not allowed"
        ]
      },
      {
        "title": "DJ & Music",
        "icon": "📌",
        "items": [
          "DJ/Music available",
          "Late-night music not allowed"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Baarat allowed",
          "Hawan allowed",
          "Overnight wedding allowed",
          "18% F&B tax",
          "Advance payment: 100% at booking"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Mehrauli-Gurgaon Rd, near Arjan Garh, Aya Nagar, New Delhi, Delhi 110047, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Luxera+Hotel,+Mehrauli-Gurgaon+Rd,+Aya+Nagar,+New+Delhi+110047&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Luxera+Hotel,+Mehrauli-Gurgaon+Rd,+Aya+Nagar,+New+Delhi+110047"
  },
  "heroImageFit": null
};

const LuxeraHotelMgRoad = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default LuxeraHotelMgRoad;
