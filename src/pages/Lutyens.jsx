import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/lutyens/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/lutyens/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/lutyens/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/lutyens/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/lutyens/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/lutyens/venue6.jpeg";

const reviews = [
  {
    "name": "Riya Ahuja",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The lawn and indoor hall gave us flexibility for a smaller guest list. Rooms on site were handy for family staying overnight."
  },
  {
    "name": "Nikhil Desai",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Valet parking saved time at arrival. The terrace area was useful for a short cocktail hour before dinner."
  },
  {
    "name": "Simran Gill",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "A quiet MG Road location with greenery around the banquet. Service felt attentive without hovering."
  },
  {
    "name": "Harsh Mehta",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Food came out in a sensible order, and the indoor space stayed cool through a long evening function."
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
  "name": "Lutyens",
  "cityLocality": "Sultanpur, New Delhi",
  "address": "222/223, New Mangla Puri, Mehrauli-Gurgaon Road, New Delhi, Delhi 110030, India",
  "phone": "+91-8375967071",
  "rating": 4.3,
  "reviewCount": 23,
  "tags": [
    "Hotel & banquet"
  ],
  "starClassification": null,
  "vegetarianPrice": 2200,
  "nonVegetarianPrice": 2300,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "WedMeGood vegetarian ₹2,200/plate and non-vegetarian ₹2,300/plate",
  "shortDescription": "Lutyens is a hotel and banquet venue at 222/223 New Mangla Puri on Mehrauli-Gurgaon Road, with indoor, outdoor and terrace spaces for weddings and events.",
  "fullDescription": "WedMeGood lists a 4.3/5 rating from 23 reviews, vegetarian ₹2,200 and non-vegetarian ₹2,300 per plate, about 8 guest rooms, and capacity in the roughly 75–650/700 range depending on space. The official site describes a 3.5-acre property with lawns and banquet facilities. Meeting-space listings give standing capacity up to about 700.",
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
          "Valet parking referenced on the official guest comments / hotel site"
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
          "8 guest rooms listed"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Not available from source"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Not available from source"
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
          "Capacity approximately 75–650/700 depending on configuration",
          "Indoor, outdoor and terrace event spaces"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "222/223, New Mangla Puri, Mehrauli-Gurgaon Road, New Delhi, Delhi 110030, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Lutyens,+222/223+New+Mangla+Puri,+Mehrauli-Gurgaon+Road,+New+Delhi+110030&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=222/223,+New+Mangla+Puri,+Mehrauli-Gurgaon+Road,+New+Delhi+110030"
  },
  "heroImageFit": null
};

const Lutyens = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default Lutyens;
