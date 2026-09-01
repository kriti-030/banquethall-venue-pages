import VenuePage from "../Components/VenuePage";
import venue1 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue1.jpeg";
import venue2 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue2.jpeg";
import venue3 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue3.jpeg";
import venue4 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue4.jpeg";
import venue5 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue5.jpeg";
import venue6 from "../assets/Venuesphotos/goldfinch-hotel-delhi-ncr/venue6.jpeg";

const reviews = [
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "They gave us an extremely nice experience. I had my sangeet here and the managemnet ensured that they help us in everything. They had enough waiters and good service was given to us by all of the waiters. The food they served was very good and the decor they did was also very nice."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Recently visited this venue for a wedding function and all the services were top notch,staff team was professional and prompt.All in all it was a great experience,would highly recommend them for your future event too!!"
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "I had attended my cousin's engagement here. That was the time when it was known as Sarovar portico. Hospitality, food, decor everything was gr8."
  },
  {
    "name": "Verified Guest",
    "verified": true,
    "rating": 1,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Bad experience. The sales Manager, who proclaimed to be the one running the hotel (and not owning it), Mr. Omkar is a bully and a bad human. Doesnt know how to talk to females. Called me up twice and literally shouted at me for no reason... me \"the client\". Reduced me to tears when he said \"I will see how you are able to have your function, I wont let it happen.\" Did backtrack for a bit and then was same again the next day. The service was extremely poor too. They asked for payment when we were sitting for a pooja, and asked for money which we had already cleared before the start of all the functions. Said we cant keep track of payments, if you have paid, you show proof, we dont know. Also the food was served 1.5-2 hours late on EVERY function and after an hour they would ask to wrap it up cause they had to start for the evening/next day event too. Horrible experience with the Omkar guy before and after the wedding."
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
  "name": "Goldfinch Hotel Delhi NCR",
  "cityLocality": "Sector 39, Faridabad",
  "address": "74/2A, Lakkarpur, Sector 39, Faridabad, Haryana 121009, India",
  "phone": "+91 129 424 9999",
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
