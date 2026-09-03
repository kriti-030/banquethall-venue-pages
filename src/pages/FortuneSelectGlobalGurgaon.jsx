import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue1.jpeg";
import venue4 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue4.jpeg";
import venue2 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue3.jpeg";
import venue6 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue6.jpeg";

const reviews = [
  {
    "name": "Pooja Gupta",
    "verified": false,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Meals and guest service were both standouts for us. Guest rooms felt roomy and tastefully done, the event spaces can be dressed up in different styles, and the Gurgaon location was practical for relatives travelling from multiple directions."
  },
  {
    "name": "Rahul Sharma",
    "verified": false,
    "rating": 4,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We booked the hotel for a multi-day wedding schedule and most of our party stayed on property. Bedrooms were comfortable, presentations during functions looked neat, and the operations team kept the programme moving without confusion."
  },
  {
    "name": "Priya Mehta",
    "verified": false,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Dining and floor service exceeded our expectations, and the overall mood of the venue suited a formal celebration well. Some areas of the building show their age, but the team still delivered a largely smooth function."
  },
  {
    "name": "Neha Kapoor",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "For our stay-in wedding, this hotel checked nearly every box. Relatives praised the buffet across both days, staff were generous with their time, and the décor team translated our theme nicely from the engagement through the haldi and main ceremony."
  }
];

const images = [
  venue1,
  venue4,
  venue2,
  venue3,
  venue6,
];

const venue = {
  "name": "Fortune Select Global, Gurgaon - Member ITC hotels' group",
  "cityLocality": "Sector 26, Gurugram",
  "address": "Global Arcade, Mehrauli-Gurgaon Rd, Sikanderpur, Sector 26, Gurugram, Haryana 122002, India",
  "phone": "+91-8375967071",
  "rating": 4.8,
  "reviewCount": 11,
  "tags": null,
  "starClassification": "4-star hotel",
  "vegetarianPrice": 2600,
  "nonVegetarianPrice": 2600,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "Situated on Mehrauli-Gurgaon Road, Fortune Select Global Gurgaon is a business hotel in the heart of Gurgaon's commercial district, offering elegant rooms and versatile spaces for wedding celebrations.",
  "fullDescription": "The hotel has 107 well-appointed rooms and event spaces including banquet halls and lawn. Event areas can accommodate 600–800 guests on a floating basis. The Grand Dine all-day dining offers local and international cuisine. In-house catering, decor, alcohol, and DJ services are available under one roof.",
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
          "1 complimentary A/C changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Valet parking available; parking for approximately 500 vehicles"
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
          "107 guest rooms available",
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
          "Indoor banquet and outdoor lawn spaces available",
          "Less than 50 pax allowed for small functions",
          "In-house DJ available; outside DJ not permitted",
          "Capacity: 600–800 pax (floating)"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Global Arcade, Mehrauli-Gurgaon Rd, Sikanderpur, Sector 26, Gurugram, Haryana 122002, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Fortune+Select+Global,+Sector+26,+Gurugram,+Haryana+122002&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Global+Arcade,+Mehrauli-Gurgaon+Rd,+Sikanderpur,+Sector+26,+Gurugram,+Haryana+122002,+India"
  },
  "heroImageFit": "contain"
};

const FortuneSelectGlobalGurgaon = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default FortuneSelectGlobalGurgaon;
