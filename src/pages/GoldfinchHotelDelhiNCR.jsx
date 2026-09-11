import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue2.jpeg";
import venue4 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue6.jpeg";

const reviews = [
  {
    "name": "Isha Tandon",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Our sangeet night went better than we expected. The events desk stayed involved in small details, serving staff were sufficient for our guest list, and both the catering and stage styling looked polished."
  },
  {
    "name": "Manav Bajaj",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We joined a wedding here as guests and noticed how quickly the team responded to requests on the floor. Everything from seating to meal rounds felt organised, and we would consider it for our own function."
  },
  {
    "name": "Kavya Menon",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "I remember visiting when the property operated under an earlier brand name, and my cousin's engagement was handled warmly. Food, décor, and general hospitality all left a good impression on our family."
  }
];

const images = [
  venue1,
  venue2,
  venue4,
  venue5,
  venue6,
];

const venue = {
  "name": "Goldfinch Hotel Delhi NCR",
  "cityLocality": "Sector 39, Faridabad",
  "address": "74/2A, Lakkarpur, Sector 39, Faridabad, Haryana 121009, India",
  "phone": "+91-8375967071",
  "rating": 4.2,
  "reviewCount": 6,
  "tags": null,
  "starClassification": "4-star hotel",
  "vegetarianPrice": 1800,
  "nonVegetarianPrice": 2000,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes",
  "shortDescription": "Goldfinch Hotel in Surajkund offers a perfect wedding space for pre and post wedding events, with a well-sophisticated aura, banqueting facilities, and a lawn that is among the largest in the city.",
  "fullDescription": "The hotel has 70 spacious rooms and indoor and outdoor event spaces including banquet halls and lawn. Outdoor lawn capacity is 400 seating and 750 floating; indoor space capacity is 120 seating and 200 floating. In-house catering, in-house alcohol, and panel decorators are available.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM - 4:00 PM",
          "Evening: 7:30 PM - 11:00 PM"
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
          "Parking available for approximately 100 vehicles + valet"
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
          "70 guest rooms available",
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
          "In-house alcohol available"
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
          "Outdoor lawn: up to 750 floating; indoor banquet: up to 200 floating"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "74/2A, Lakkarpur, Sector 39, Faridabad, Haryana 121009, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Goldfinch+Hotel,+Sector+39,+Faridabad,+Haryana+121009&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=74/2A,+Lakkarpur,+Sector+39,+Faridabad,+Haryana+121009,+India"
  },
  "heroImageFit": null
};

const GoldfinchHotelDelhiNCR = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default GoldfinchHotelDelhiNCR;
