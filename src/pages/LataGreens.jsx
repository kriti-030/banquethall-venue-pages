import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/lata-greens/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/lata-greens/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/lata-greens/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/lata-greens/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/lata-greens/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/lata-greens/venue6.jpeg";

const reviews = [
  {
    "name": "Ishita Nair",
    "verified": false,
    "rating": 5,
    "review": "The lawn and hall combination suited a mixed indoor-outdoor function. Meal service stayed steady even when guests arrived in clusters."
  },
  {
    "name": "Kabir Seth",
    "verified": false,
    "rating": 4,
    "review": "Valet helped at the entrance, and the air-conditioned changing rooms were a relief in the afternoon slot."
  },
  {
    "name": "Diya Chauhan",
    "verified": false,
    "rating": 4,
    "review": "A straightforward banquet setting with enough lawn for a baraat-style arrival. The team was clear about food being in-house only."
  },
  {
    "name": "Yash Kulkarni",
    "verified": false,
    "rating": 3,
    "review": "Guests found the location easy to reach from MG Road. Décor looked neat, and the evening wrapped up without a rush at the gate."
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
  "name": "Lata Greens",
  "cityLocality": "Sultanpur / Chattarpur, New Delhi",
  "address": "Mehrauli-Gurgaon Rd, Near Pillar No. 31B, Sultanpur, New Delhi, Delhi 110030, India",
  "phone": "+91-8375967071",
  "rating": 3.9,
  "reviewCount": 14,
  "tags": [
    "Banquet hall & lawn"
  ],
  "starClassification": null,
  "vegetarianPrice": 3500,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "WedMeGood starting ₹3,500/plate + taxes. Vegetarian also listed at ₹3,800/plate + taxes. Non-vegetarian per-plate price: not available from source.",
  "shortDescription": "Lata Greens is an indoor-and-outdoor banquet and lawn venue on Mehrauli-Gurgaon Road in Sultanpur, used for weddings and related functions.",
  "fullDescription": "WedMeGood lists starting ₹3,500/plate + taxes and vegetarian from ₹3,800/plate + taxes, with a 3.9/5 rating from 14 reviews. Area capacities: indoor + outdoor 500 seating / 1,200 floating; hall 200 seating / 400 floating; lawn 300 seating / 700 floating. Main policy listings used here (not the conflicting FAQ slot) give morning 11:00 AM–4:00 PM and evening 7:00 PM–12:00 AM, parking for about 100 vehicles with valet, non-cancellation, 25% deposit to hold a date, and food provided by the venue with no outside caterer.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM – 4:00 PM",
          "Evening: 7:00 PM – 12:00 AM",
          "Venue closes: 12:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "2 complimentary AC changing rooms"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Parking available for 250 vehicles",
          "Valet parking available"
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
          "No rooms available"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Food provided by venue",
          "Outside caterer allowed"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Alcohol allowed",
          "Outside alcohol allowed",
          "Corkage applicable"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Decor provided by venue",
          "Outside decorators not allowed"
        ]
      },
      {
        "title": "DJ & Music",
        "icon": "📌",
        "items": [
          "Outside DJ permitted",
          "Late-night music not allowed"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "25% at booking",
          "F&B tax: 18%",
          "Baarat allowed",
          "Hawan allowed",
          "Overnight wedding not allowed"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Mehrauli-Gurgaon Rd, Near Pillar No. 31B, Sultanpur, New Delhi, Delhi 110030, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Lata+Greens,+Mehrauli-Gurgaon+Rd,+Sultanpur,+New+Delhi+110030&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Lata+Greens,+Mehrauli-Gurgaon+Rd,+Sultanpur,+New+Delhi+110030"
  },
  "heroImageFit": null
};

const LataGreens = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default LataGreens;
