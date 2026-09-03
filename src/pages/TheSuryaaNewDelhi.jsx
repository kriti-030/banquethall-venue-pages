import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue3.jpeg";
import venue6 from "../assets/Venuesphotos/the-suryaa-new-delhi/venue6.jpeg";

const reviews = [
  {
    "name": "Amit Bansal",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "From the moment we arrived, the property felt ready for a large celebration. Service teams were alert, the setup looked refined, and the meal service was one of the highlights of the evening."
  },
  {
    "name": "Sneha Arora",
    "verified": false,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We booked the hotel for our main wedding function and the atmosphere on the day was exactly what we hoped for. Lighting, décor, and dining all came together nicely, and the front desk team remained approachable throughout."
  },
  {
    "name": "Karan Singh",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "With around three hundred guests, we needed both a banquet hall and an outdoor mandap area, and the layout handled the crowd comfortably. Food and guest care were strong points for us."
  },
  {
    "name": "Rohan Malhotra",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Our wedding reception here felt lively and well managed. The in-house kitchen impressed our friends and relatives, and the service staff kept the energy positive all evening."
  }
];

const images = [
  venue1,
  venue2,
  venue3,
  venue6,
];

const venue = {
  "name": "The Suryaa New Delhi",
  "cityLocality": "New Friends Colony, New Delhi",
  "address": "MMA Rd, New Friends Colony, New Delhi, Delhi 110025, India",
  "phone": "+91-8375967071",
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
