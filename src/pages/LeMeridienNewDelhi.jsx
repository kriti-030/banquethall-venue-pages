import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/le-meridien-new-delhi/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/le-meridien-new-delhi/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/le-meridien-new-delhi/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/le-meridien-new-delhi/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/le-meridien-new-delhi/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/le-meridien-new-delhi/venue6.jpeg";

const reviews = [
  {
    "name": "Rahul Sharma",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We finalised this hotel only a week before our wedding during a difficult period, yet the team pulled everything together beautifully. Guests kept complimenting the meals and the overall service, and we felt well looked after from start to finish."
  },
  {
    "name": "Priya Mehta",
    "verified": false,
    "rating": 4,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Our two-day celebration was spread across this property after we compared several luxury hotels in Delhi NCR. The scale and presence of the venue impressed us, and the catering consistently stood out as the strongest part of the experience."
  },
  {
    "name": "Neha Kapoor",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We chose this hotel for our wedding, but the catering and floral setup did not match what had been discussed with us beforehand. Several parts of the event felt below our expectations."
  },
  {
    "name": "Vikram Sethi",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "I never booked an event here, but my initial enquiry call left a poor impression. The representative I spoke with came across as dismissive, which made us look elsewhere for our function."
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
  "name": "Le Méridien New Delhi",
  "cityLocality": "Connaught Place, New Delhi",
  "address": "Windsor Pl, Connaught Place, New Delhi, Delhi 110001, India",
  "phone": "+91-8375967071",
  "rating": 4.4,
  "reviewCount": 24,
  "tags": null,
  "starClassification": "5-star hotel",
  "vegetarianPrice": 2700,
  "nonVegetarianPrice": 3500,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes (banquethalls.in)",
  "shortDescription": "Le Méridien New Delhi is located in the heart of New Delhi; it is an iconic glass building recognised as one of the 100 Icons of Delhi and an ideal venue for weddings and events.",
  "fullDescription": "The hotel offers over 20,200 square feet of event space with six meeting rooms, two ballrooms, and a boardroom that can host weddings and celebrations. It has 358 luxurious guest rooms. Vendors on the hotel panel provide flower decoration and DJ services.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM - 5:00 PM",
          "Evening: 7:00 PM - 2:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "1 A/C changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Valet parking available + parking for 120 vehicles"
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
          "358 luxurious guest rooms available",
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
          "Alcohol not permitted"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Decorators from panel only",
          "Vendors on panel for flower decorations and DJ"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Outdoor and poolside space available",
          "Minimum 50 pax allowed",
          "In-house DJ available; outside DJ not permitted",
          "Capacity: 25–1000 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Windsor Pl, Connaught Place, New Delhi, Delhi 110001, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Le+M%C3%A9ridien+New+Delhi,+Windsor+Place,+Connaught+Place,+New+Delhi+110001&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Windsor+Pl,+Connaught+Place,+New+Delhi,+Delhi+110001,+India"
  },
  "heroImageFit": null
};

const LeMeridienNewDelhi = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default LeMeridienNewDelhi;
