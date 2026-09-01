import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue6.jpeg";

const reviews = [
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "It was an amazing experience. Suryaa staff and entire setup was next level. And the food was delicious. Experience top notch."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "I booked this place for my big day. The whole place just had a magical feeling to it. The decoration and ambience was simply amazing. The food served was delicious. The staff were really polite and attentive. It was an incredible experience. Highly recommended"
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The hospitality and food was very good. I had a gathering of 300 people and had booked an indoor banquet and vedi. Overall, had a memorable experience for my special day."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "My wedding was held at Suryaa! The location and staff was amazing, food was provided by the hotel. Absolutely incredible food. People enjoyed a lot & the hospitality was great"
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
  "name": "The Suryaa New Delhi",
  "cityLocality": "New Friends Colony, New Delhi",
  "address": "MMA Rd, New Friends Colony, New Delhi, Delhi 110025, India",
  "phone": "+91 11 4780 8080",
  "rating": 4.8,
  "reviewCount": 8,
  "tags": null,
  "starClassification": "5-star hotel",
  "vegetarianPrice": 3199,
  "nonVegetarianPrice": 3499,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "The Suryaa New Delhi is a premium wedding hotel in New Friends Colony, Delhi NCR, known for warm hospitality, exceptional ambience, and beautiful event spaces for intimate gatherings and grand wedding functions.",
  "fullDescription": "The hotel offers multiple indoor and outdoor venues including a grand ballroom, Platinum halls, Crystal room, poolside, and terrace spaces. It has 244 guest rooms for wedding parties. The ballroom can host up to 400 guests in floating arrangement; combined ballroom and platinum areas can accommodate up to 600 guests.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM - 6:00 PM",
          "Evening: 7:00 PM - 12:00 AM"
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
          "Parking available for approximately 150 vehicles + valet"
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
          "244 guest rooms available",
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
          "In-house alcohol available",
          "Outside alcohol not permitted"
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
          "Indoor, poolside, and terrace/rooftop spaces available",
          "Less than 50 pax allowed for small functions",
          "In-house DJ available; outside DJ not permitted",
          "Capacity: 20–600 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "MMA Rd, New Friends Colony, New Delhi, Delhi 110025, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=The+Suryaa+New+Delhi,+New+Friends+Colony,+New+Delhi+110025&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=MMA+Rd,+New+Friends+Colony,+New+Delhi,+Delhi+110025,+India"
  },
  "heroImageFit": null
};

const TheSuryaaNewDelhi = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default TheSuryaaNewDelhi;
