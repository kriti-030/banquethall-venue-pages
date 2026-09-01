import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/crowne-plaza-new-delhi-okhla/venue6.jpeg";

const reviews = [
  {
    "name": "Wedding Rose",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We organized a wedding at Crown Plaza, Okhla. All The Staff including Mr. Salman did their job exceptionally well. I just loved the experience with their Banquet. I'm so happy to share my review. have no second thoughts and doubts in terms of the quality of food, staff behavior, and management. Wonderful place and service. We recommend it."
  },
  {
    "name": "Mukesh Wason",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Crown Plaza Okhla has been a great Venue to celebrate My Daughter's Wedding. The team lead by Ms. Muskan, our Coordinator has insight to make the events Princely. Chef Karan paid personal attention to create Lucid Delicacies. The Banquet team with Vansh was always there to provide personal care to all the Guests. Thanks Crown Plaza Okhla team"
  },
  {
    "name": "Bhawna Seth",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "It was a wonderful experience. The staff was very very courteous and accommodating. They truly went out of the way to help us as much possible. Special thanks to Muskan, Ankush, chef Karan."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Hosted my wedding ceremony at Crown Plaza and it was indeed a wonderful experience. Staff team was super professional and we enjoyed throughout the event!! Can highly recommend."
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
  "name": "Crowne Plaza New Delhi Okhla by IHG",
  "cityLocality": "Okhla Industrial Estate, New Delhi",
  "address": "Community Centre, Plot No. 1, Pocket A, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020, India",
  "phone": "+91 11 4646 2000",
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
