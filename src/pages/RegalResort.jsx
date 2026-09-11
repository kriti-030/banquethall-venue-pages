import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/regal-resort/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/regal-resort/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/regal-resort/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/regal-resort/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/regal-resort/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/regal-resort/venue6.jpeg";

const reviews = [
  {
    "name": "Tanvi Sharma",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The lawn felt generous for a large gathering, and the poolside corner was a nice extra for evening photos."
  },
  {
    "name": "Abhinav Goel",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Rooms on campus helped out-of-town relatives. In-house catering kept the menu consistent through dinner."
  },
  {
    "name": "Shreya Menon",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The banquet hall was compact but well arranged. Staff coordinated décor and the DJ without overlapping cues."
  },
  {
    "name": "Vivek Anand",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Parking was available, and guests said the grounds were easy to walk between the hall and lawn."
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
  "name": "Regal Resort",
  "cityLocality": "Chattarpur, New Delhi",
  "address": "Satbari, Chattarpur, New Delhi, Delhi, India",
  "phone": "+91-8375967071",
  "rating": 4.7,
  "reviewCount": 13,
  "tags": [
    "Resort"
  ],
  "starClassification": null,
  "vegetarianPrice": 1499,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "WedMeGood starting ₹1,499/plate + taxes. Vegetarian also listed at ₹1,799/plate + taxes. Non-vegetarian per-plate price: not available from source.",
  "shortDescription": "Regal Resort in the Chattarpur / Satbari area is listed as a wedding venue with banquet, lawn and poolside spaces plus 50 rooms.",
  "fullDescription": "WedMeGood lists 4.7/5 from 13 reviews, starting ₹1,499/plate + taxes and vegetarian ₹1,799/plate + taxes, 50 rooms, Banquet Hall 200 seating / 300 floating, Lawn 500 seating / 800 floating, Poolside 100 seating / 200 floating, and Banquet Hall + Poolside 200 seating / 300 floating. Policies listed: in-house catering, in-house décor, in-house DJ with outside DJ permitted, outside alcohol not permitted. An exact matching VenueMonk listing was not verified.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Not available from source"
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
          "Parking available"
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
          "50 rooms listed"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "In-house catering only"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Outside alcohol not permitted"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "In-house décor"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Banquet Hall: 200 seating / 300 floating",
          "Lawn: 500 seating / 800 floating",
          "Poolside: 100 seating / 200 floating",
          "Banquet Hall + Poolside: 200 seating / 300 floating",
          "In-house DJ available; outside DJ permitted"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Satbari, Chattarpur, New Delhi, Delhi, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Regal+Resort,+Satbari,+Chattarpur,+New+Delhi&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Regal+Resort,+Satbari,+Chattarpur,+New+Delhi"
  },
  "heroImageFit": null
};

const RegalResort = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default RegalResort;
