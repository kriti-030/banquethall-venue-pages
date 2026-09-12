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
    "rating": 5,
    "review": "The lawn felt generous for a large gathering, and the poolside corner was a nice extra for evening photos."
  },
  {
    "name": "Abhinav Goel",
    "verified": false,
    "rating": 5,
    "review": "Rooms on campus helped out-of-town relatives. In-house catering kept the menu consistent through dinner."
  },
  {
    "name": "Shreya Menon",
    "verified": false,
    "rating": 5,
    "review": "The banquet hall was compact but well arranged. Staff coordinated décor and the DJ without overlapping cues."
  },
  {
    "name": "Vivek Anand",
    "verified": false,
    "rating": 4,
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
  "cityLocality": "Satbari, New Delhi",
  "address": "Ansal Villas, Satbari, New Delhi, Delhi 110074",
  "phone": "+91-8375967071",
  "rating": 4.7,
  "reviewCount": 13,
  "tags": [
    "Resort"
  ],
  "starClassification": null,
  "vegetarianPrice": 1799,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting ₹1,499/plate + taxes. Vegetarian ₹1,799/plate + taxes.",
  "shortDescription": "Regal Resort is a resort in Ansal Villas, Satbari, New Delhi, Delhi 110074, with indoor, outdoor and poolside spaces, 50 rooms, parking for 120–150 cars, and a maximum capacity of 800 guests.",
  "fullDescription": "Starting ₹1,499/plate + taxes; vegetarian ₹1,799/plate + taxes. Event spaces: Banquet Hall 200 seating / 300 floating; Lawn 500 seating / 800 floating; Poolside 100 seating / 200 floating; Banquet Hall + Poolside 200 seating / 300 floating. In-house catering, in-house decoration and in-house DJ; outside DJ permitted; outside alcohol not permitted; small functions below 50 guests allowed.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings",
        "icon": "⏰",
        "items": [
          "Events typically end by late night (subject to license)"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "50 guest rooms available on property",
          "Dedicated complimentary changing-room count not specified"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "120–150 cars",
          "Sufficient parking available"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Room cancellation terms vary by booking/room type",
          "Banquet/event cancellation policy not publicly specified"
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
          "In-house alcohol not available",
          "Outside alcohol not permitted"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "In-house decor"
        ]
      },
      {
        "title": "DJ & Music",
        "icon": "📌",
        "items": [
          "In-house DJ available",
          "Outside DJ permitted"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Ansal Villas, Satbari, New Delhi, Delhi 110074",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Regal+Resort,+Ansal+Villas,+Satbari,+New+Delhi+110074&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Regal+Resort,+Ansal+Villas,+Satbari,+New+Delhi+110074"
  },
  "heroImageFit": null
};

const RegalResort = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default RegalResort;
