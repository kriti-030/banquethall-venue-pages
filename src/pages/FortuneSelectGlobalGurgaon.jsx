import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue1.jpeg";
import venue4 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue4.jpeg";
import venue2 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue3.jpeg";
import venue6 from "../assets/Venuesphotos/fortune-select-global-gurgaon/venue6.jpeg";

const reviews = [
  {
    "name": "Priyali Soota",
    "verified": true,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "In short: amazing food, amazing service! Spacious rooms with beautiful decor. There is a lot that you can do with the area- it can be set up for various moods, depends on whatever you've got going on! The location is also very convenient for everyone."
  },
  {
    "name": "Deepika Bawa",
    "verified": true,
    "rating": 4,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Fortune Select Global is a very pretty property,we booked it for our wedding ceremonies. All our friends and family stayed in the same hotel and we had a nice and comfortable stay. The food, decor, presentation and everything was perfectly managed by the team. I would definitely recommend this venue to you !!"
  },
  {
    "name": "Aashna Behl",
    "verified": true,
    "rating": 4.5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "The food and service was excellent , we liked the overall ambience of the place. The management was very good with everything you required at function but the place seems a bit old now and requires rennovation.."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Great place to plan your D day. There are a lot of things that I would like share about this hotel. Starting with food, the best thing about the place was it's food. ITC Fortune select global maintains such high standards of food in terms of taste and quality. Each every guest praised about the food , it was simply sumptuous. Apart from food, they have great staff, so generous and helpful. Ours was a residential wedding and I am glad I chose this hotel. Decorator was so humble and they really made my wedding memorable. It was so beautifully decorated with the theme that we chose on both days- engagement and wedding day. And the best of all was their haldi decoration. In a nutshell there's no parameter in which I can rate this hotel less than 5/5 rating, be it hospitality, food, ambience or decor."
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
  "phone": "+91 124 419 6666",
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
