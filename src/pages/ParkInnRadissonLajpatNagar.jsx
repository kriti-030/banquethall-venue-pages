import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/park-inn-radisson-lajpat-nagar/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/park-inn-radisson-lajpat-nagar/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/park-inn-radisson-lajpat-nagar/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/park-inn-radisson-lajpat-nagar/venue4.jpeg";
import venue6 from "../assets/Venuesphotos/park-inn-radisson-lajpat-nagar/venue6.jpeg";

const reviews = [
  {
    "name": "Ishita Jain",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We used this hotel for one leg of our wedding functions and walked away pleased with the outcome. Both the catering and the visual setup aligned closely with what we discussed during planning."
  },
  {
    "name": "Kabir Anand",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The interiors photograph beautifully, and booking the hall with poolside access gave us flexibility for different parts of the programme. Food quality was strong and the service team remained courteous under a busy schedule."
  }
];

const images = [
  venue1,
  venue2,
  venue3,
  venue4,
  venue6,
];

const venue = {
  "name": "Park Inn by Radisson New Delhi Lajpat Nagar",
  "cityLocality": "Lajpat Nagar, New Delhi",
  "address": "1&2, Ring Rd, Vikram Vihar, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024, India",
  "phone": "+91-8375967071",
  "rating": 5,
  "reviewCount": 2,
  "tags": null,
  "starClassification": "4-star hotel",
  "vegetarianPrice": 2500,
  "nonVegetarianPrice": 2800,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "Park Inn By Radisson Lajpat Nagar is a 4-star wedding hotel in South Delhi, offering indoor banquet halls and poolside spaces for weddings and social events.",
  "fullDescription": "The hotel has 68 guest rooms and multiple event spaces including Vikram hall with poolside area. Four banquet halls suit smaller meetings; social events can host 30 to 350 guests. Cafe 1440 offers Continental, Indian, and Chinese cuisine. In-house catering, panel decorators, in-house alcohol, and DJ services are available.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 10:00 AM - 4:00 PM",
          "Evening: 7:00 PM - 12:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "1 complimentary A/C changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Valet parking available; parking for approximately 400 vehicles"
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
          "68 guest rooms available",
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
          "Indoor banquet halls and poolside spaces available",
          "Less than 50 pax allowed for small functions",
          "In-house DJ available; outside DJ not permitted",
          "Capacity: 150–300 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "1 & 2, Ring Rd, Vikram Vihar, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Park+Inn+by+Radisson,+Lajpat+Nagar,+New+Delhi+110024&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=1+%26+2,+Ring+Rd,+Vikram+Vihar,+Lajpat+Nagar+4,+Lajpat+Nagar,+New+Delhi,+Delhi+110024,+India"
  },
  "heroImageFit": null
};

const ParkInnRadissonLajpatNagar = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default ParkInnRadissonLajpatNagar;
