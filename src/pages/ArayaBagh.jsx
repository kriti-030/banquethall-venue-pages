import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/araya-bagh/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/araya-bagh/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/araya-bagh/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/araya-bagh/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/araya-bagh/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/araya-bagh/venue6.jpeg";

const reviews = [
  {
    "name": "Neha Gupta",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The gardens felt spacious and well kept, and the indoor hall was easy to dress for a reception. Coordinators stayed reachable throughout the evening."
  },
  {
    "name": "Rahul Sharma",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Parking was organised, changing rooms were comfortable, and the catering team paced the meal without long gaps between courses."
  },
  {
    "name": "Trisha Bansal",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We liked how the outdoor lawn and indoor space could be used together. Guests mentioned the lighting and the calm layout of the entry."
  },
  {
    "name": "Kunal Mishra",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The venue looked polished on the day, and the on-site staff handled last-minute seating changes smoothly."
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
  "name": "Araya Bagh",
  "cityLocality": "Ghitorni, New Delhi",
  "address": "100 Ft. Road, Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi 110030, India",
  "phone": "+91-8375967071",
  "rating": 4.5,
  "reviewCount": 12,
  "tags": [
    "Luxury farm & banquet"
  ],
  "starClassification": null,
  "vegetarianPrice": 3600,
  "nonVegetarianPrice": null,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "WedMeGood starting ₹3,600/plate + taxes. Vegetarian also listed from ₹4,900/plate + taxes. Non-vegetarian per-plate price: not available from source.",
  "shortDescription": "Araya Bagh is a luxury indoor-and-outdoor wedding venue on Mehrauli-Gurgaon Road in Ghitorni, South Delhi, with multiple halls and gardens for celebrations of about 50 to 1,500 guests.",
  "fullDescription": "The official property lists five indoor and outdoor spaces on about 2.5 acres, including Alyasa Garden (up to about 800 guests), Avantaya indoor hall, and Ankaaya with an inner garden. Indoor space is listed at 8,740 sq. ft. and outdoor at 18,750 sq. ft. Official site parking is listed for about 200 cars, with four dressing rooms and lounge rooms. WedMeGood lists a 4.5/5 rating from 12 reviews, starting ₹3,600/plate + taxes and vegetarian from ₹4,900/plate + taxes.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 8:00 AM - 12:00 PM",
          "Evening: 5:00 PM - 2:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "4 complimentary A/C changing rooms"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Parking available for 50 vehicles"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Cancellable"
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
          "Food provided by the venue",
          "In-house catering only",
          "Outside food/caterer not allowed",
          "Veg and non-veg available"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "In-house alcohol only"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Decoration provided by the venue",
          "Outside decorators not allowed"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "F&B tax: 18%",
          "Advance: 25% at the time of booking",
          "No late music",
          "Baarat allowed",
          "No firecrackers",
          "Hawan allowed",
          "No overnight wedding",
          "Halls are air-conditioned"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "100 Ft. Road, Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi 110030, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Araya+Bagh,+Mehrauli-Gurgaon+Rd,+Ghitorni,+New+Delhi+110030&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Araya+Bagh,+Mehrauli-Gurgaon+Rd,+Ghitorni,+New+Delhi+110030"
  },
  "heroImageFit": null
};

const ArayaBagh = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default ArayaBagh;
