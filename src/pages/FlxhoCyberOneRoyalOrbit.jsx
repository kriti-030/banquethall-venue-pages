import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/flxho-cyber-one-royal-orbit/venue6.jpeg";

const reviews = [
  {
    "name": "Meera Kapoor",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Rooms were tidy and the lobby felt easy to wait in after check-in. Front desk staff answered questions without a delay."
  },
  {
    "name": "Karan Nanda",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Free parking near the building was convenient, and Wi-Fi in the room stayed stable through the evening."
  },
  {
    "name": "Nisha Bedi",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The restaurant was a practical option after a long day. Air conditioning in the room made the stay comfortable."
  },
  {
    "name": "Rohit Saxena",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "A compact hotel close to the metro. Check-in was quick, and the room was ready as promised."
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
  "name": "FlxHo Cyber ONE Royal Orbit – Luxury Hotel DLF Cyber City",
  "cityLocality": "DLF Phase 3, Gurugram",
  "address": "NR-42, Nathupur Road, DLF 3, Near Dronacharya Metro Station, Off MG Road, Gurgaon - 122002",
  "phone": "+91-8375967071",
  "rating": 4.7,
  "reviewCount": 1447,
  "tags": [
    "3-star hotel"
  ],
  "starClassification": "3-star hotel",
  "vegetarianPrice": null,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Official site room pricing starts around ₹2,800/day. Wedding per-plate pricing: Not available from source.",
  "shortDescription": "FlxHo Cyber ONE Royal Orbit is a 3-star hotel near Dronacharya Metro Station / DLF Cyber City with rooms, restaurant, free parking, free Wi-Fi and a 24-hour front desk. A matching WedMeGood/VenueMonk wedding listing was not verified.",
  "fullDescription": "Official property page: NR-42, Nathupur Road, DLF 3, near Dronacharya Metro Station, off MG Road, Gurgaon 122002. Listed amenities include air-conditioned rooms, restaurant (Chinese, Indian and Italian), free Wi-Fi, concierge, shared lounge, bar, room service and 24-hour front desk. Google rating is listed at 4.7 with about 1,447 reviews. Wedding-specific capacity, per-plate pricing, changing rooms, advance, cancellation, F&B tax and wedding slots were not verified and are not shown.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Free parking"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "Hotel rooms with air conditioning",
          "Official site room pricing starts around ₹2,800/day"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Restaurant on site"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Bar listed on the official property page"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "3-star hotel",
          "Free Wi-Fi",
          "24-hour front desk",
          "Wedding banquet capacity and wedding policies: Not available from source"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "NR-42, Nathupur Road, DLF 3, Near Dronacharya Metro Station, Off MG Road, Gurgaon - 122002",
    "mapEmbedUrl": "https://maps.google.com/maps?q=FlxHo+Cyber+ONE+Royal+Orbit,+Nathupur+Road,+DLF+Phase+3,+Gurugram&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=NR-42,+Nathupur+Road,+DLF+3,+Near+Dronacharya+Metro+Station,+Gurgaon+122002"
  },
  "heroImageFit": null
};

const FlxhoCyberOneRoyalOrbit = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default FlxhoCyberOneRoyalOrbit;
