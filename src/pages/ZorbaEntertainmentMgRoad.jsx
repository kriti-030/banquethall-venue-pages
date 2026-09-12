import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/zorba-entertainment-mg-road/venue6.jpeg";

const reviews = [
  {
    "name": "Ananya Mehta",
    "verified": false,
    "rating": 5,
    "review": "The garden path and villa area worked well for photos, and the amphitheatre felt open without crowding the guests."
  },
  {
    "name": "Rohan Kapoor",
    "verified": false,
    "rating": 5,
    "review": "Valet was available at the gate, and the in-house team kept décor and food service on the same page through the function."
  },
  {
    "name": "Priya Malhotra",
    "verified": false,
    "rating": 5,
    "review": "Changing rooms were ready on time, and the outdoor lighting made the evening look warm rather than harsh."
  },
  {
    "name": "Arjun Verma",
    "verified": false,
    "rating": 4,
    "review": "A compact farmhouse setup that still felt roomy for a mid-size gathering. Staff were courteous when we asked for extra chairs."
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
  "name": "Zorba Entertainment MG Road",
  "cityLocality": "Sultanpur, New Delhi",
  "address": "166, Mehrauli-Gurgaon Road (MG Road), Near Sultanpur Metro Station, Sultanpur, New Delhi – 110030",
  "phone": "+91-8375967071",
  "rating": 4.7,
  "reviewCount": 23,
  "tags": [
    "Farmhouse / Banquet / Lawn",
    "Indoor + Outdoor"
  ],
  "starClassification": null,
  "vegetarianPrice": 5450,
  "nonVegetarianPrice": 5850,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Taxes extra",
  "shortDescription": "Zorba Entertainment on MG Road near Sultanpur Metro Station is a farmhouse wedding venue with a garden-and-villa setup and an amphitheatre for outdoor celebrations.",
  "fullDescription": "WedMeGood lists The Garden + The Villa at 200 seating / 450 floating and the Amphitheatre at 300 seating / 600 floating. Catering is in-house only, décor is in-house, in-house DJ is available and outside DJ is permitted, outside alcohol is permitted (in-house alcohol not listed as available), complimentary changing rooms are offered, parking and valet are available, and functions under 50 pax are allowed. Starting price is listed at ₹5,450/plate + taxes.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings",
        "icon": "⏰",
        "items": [
          "Morning: 10:00 AM – 3:30 PM",
          "Evening: 6:00 PM – 2:00 AM",
          "Venue closes: 2:00 AM"
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
          "Parking available for 1000 vehicles",
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
          "Outside caterer not allowed",
          "Non-veg allowed"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Alcohol allowed",
          "Outside alcohol allowed",
          "No corkage costs"
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
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "In-house DJ available",
          "Outside DJ permitted",
          "50% advance at booking",
          "18% F&B tax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "166, Mehrauli-Gurgaon Road (MG Road), Near Sultanpur Metro Station, Sultanpur, New Delhi – 110030",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Zorba+Entertainment,+166+MG+Road,+Sultanpur,+New+Delhi+110030&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=166,+MG+Road,+Sultanpur,+Near+Sultanpur+Metro+Station,+New+Delhi+110030"
  },
  "heroImageFit": null
};

const ZorbaEntertainmentMgRoad = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default ZorbaEntertainmentMgRoad;
