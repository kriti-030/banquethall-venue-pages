import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue1.jpeg";
import venue3 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue6.jpeg";

const reviews = [
  {
    "name": "Riya Khanna",
    "verified": false,
    "rating": 5,
    "review": "We held our wedding celebrations at this Okhla property and left feeling well supported throughout. Food quality, guest handling, and overall event management all felt dependable, and we would suggest it to others planning a similar function."
  },
  {
    "name": "Karan Bhatia",
    "verified": false,
    "rating": 5,
    "review": "Our daughter's wedding felt thoughtfully planned from the planning calls through the final evening. The coordination desk kept us informed, the kitchen team paid attention to menu details, and the floor staff made sure older guests were looked after."
  },
  {
    "name": "Simran Arora",
    "verified": false,
    "rating": 5,
    "review": "Courtesy levels were high across departments, and the team tried hard to accommodate last-minute requests from our side. Several family members commented on how smoothly the day unfolded."
  },
  {
    "name": "Nikhil Joshi",
    "verified": false,
    "rating": 4.5,
    "review": "Our wedding ceremony here felt organised and relaxed at the same time. The operations crew stayed professional under pressure, and we genuinely enjoyed the celebration rather than worrying about logistics."
  }
];

const images = [
  venue1,
  venue3,
  venue4,
  venue5,
  venue6,
];

const venue = {
  "name": "Crowne Plaza New Delhi Okhla by IHG",
  "cityLocality": "Okhla Industrial Estate, New Delhi",
  "address": "Community Centre, Plot No. 1, Pocket A, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020, India",
  "phone": "+91-8375967071",
  "rating": 5,
  "reviewCount": 11,
  "tags": null,
  "starClassification": "5-star hotel",
  "vegetarianPrice": 3399,
  "nonVegetarianPrice": 3599,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "Crowne Plaza New Delhi Okhla, an IHG Hotel is a stunning wedding venue in Okhla, Delhi NCR, with gorgeous infrastructure and warm service, recognized for hosting royal and grand celebrations.",
  "fullDescription": "The hotel offers 208 guest rooms and flexible indoor and outdoor event spaces including a ballroom, poolside area, and lobby-level outdoor venue suitable for wedding functions. Banquet space spans about 8,500 sq. ft. with multiple indoor and outdoor venues.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM - 5:00 PM",
          "Evening: 7:00 PM - 1:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "A/C changing room available"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Parking available for approximately 300 vehicles"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Not allowed"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "208 guest rooms available",
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
          "In-house DJ available; outside DJs permitted",
          "Outdoor and poolside event spaces available",
          "Capacity: 40–600 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Community Centre, Plot No. 1, Pocket A, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Crowne+Plaza+New+Delhi+Okhla,+Okhla+Industrial+Estate,+New+Delhi+110020&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Community+Centre,+Plot+No.+1,+Pocket+A,+Okhla+Phase+I,+Okhla+Industrial+Estate,+New+Delhi,+Delhi+110020,+India"
  },
  "heroImageFit": null
};

const CrownePlazaNewDelhiOkhla = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default CrownePlazaNewDelhiOkhla;
