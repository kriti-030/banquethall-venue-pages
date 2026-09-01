import VenuePage from "../Components/VenuePage";
import eden1 from "../assets/Venuesphotos/edengarden/eden1.jpeg";
import eden2 from "../assets/Venuesphotos/edengarden/eden2.jpeg";
import eden3 from "../assets/Venuesphotos/edengarden/eden3.jpeg";
import eden4 from "../assets/Venuesphotos/edengarden/eden4.jpeg";
import eden5 from "../assets/Venuesphotos/edengarden/eden5.jpeg";
import eden6 from "../assets/Venuesphotos/edengarden/eden6.jpeg";

const reviews = [
  {
    name: "Dev",
    verified: true,
    rating: 5,
    eventDate: "16 Feb 2024",
    pax: 140,
    review: "Very beautiful service and quality in Grand highway. Specially thanks❤ for Vivek ji",
  },
  {
    name: "Himanshu",
    verified: true,
    rating: 4,
    eventDate: "08 Feb 2024",
    pax: 50,
    review: "Great experience, but there were a few minor issues.",
  },
  {
    name: "Rahul",
    verified: true,
    rating: 5,
    eventDate: "09 Feb 2024",
    pax: 200,
    review: "Service was okay, but could be improved.",
  },
];

const images = [eden1, eden2, eden3, eden4, eden5, eden6];

const venue = {
  name: "Eden Garden Lawn",
  cityLocality: "Suraj Kund Badkhal Road, Faridabad",
  address:
    "Eden Garden Lawn, Opposite Sidharth Temple And Laxmi Narayan, Surajkund, Uadahal Lake, Faridabad 121001",
  phone: "+91-8375967071",
  rating: 4.7,
  reviewCount: 3,
  tags: ["Wedding Hotels", "Banquet Halls", "Party Halls", "Marriage Halls"],
  starClassification: null,
  vegetarianPrice: 1000,
  nonVegetarianPrice: 1200,
  banquetPriceRangeMin: null,
  banquetPriceRangeMax: null,
  shortDescription:
    "Eden Garden Lawn, Faridabad, is a fabulous venue for hosting your dream wedding and reception ceremony. Located near the Shri Sidhdata Ashram, which is a known spot for the locals living nearby, this",
  fullDescription:
    " venue makes it hassle-free for all to arrive here. It is positioned about 15 mins away from both Sector 28 Metro Station and Faridabad Train Station. Eden Garden Faridabad has a couple of spacious and lush green lawns that can accommodate a huge crowd for your function. These lawns are ideal for an open-air function under the star-lit sky. Eden Garden Lawn, Suraj Kund Badkhal Road, Faridabad serves flavorsome delicacies in both vegetarian and non-vegetarian variants to choose from. The elegant decor of Eden Garden Lawn 1 Faridabad is perfect for your big day. However, if you wish to enhance the look for your event, there's an on-site decor team, or you can get your preferred decorators from outside. Add alcohol and see everyone having a good time. Ample and valet parking space offers convenience for all. Look your best and make heads turn as the venue offers complimentary changing rooms. The inviting ambiance and the freshness of the lawns make everyone feel welcomed. Book Eden Garden Lawn, Faridabad, Haryana, to make your events memorable.",
  showBhManaged: true,
  showDemandBanner: true,
};

const Edengardenlawn = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default Edengardenlawn;
