/** Verified-only data for 8 new venues. Unavailable fields stay null. */

const sampleReviews = (count) =>
  Array.from({ length: count }, (_, i) => ({
    name: `Sample card ${i + 1}`,
    verified: false,
    rating: null,
    eventDate: "Not available from source",
    pax: "Not available from source",
    review:
      "Sample placeholder — not a customer testimonial. Individual guest reviews are not reproduced from third-party listings.",
    source: "placeholder",
  }));

export const NEW_VENUES = [
  {
    id: 9,
    slug: "araya-bagh",
    name: "Araya Bagh",
    proposedComponent: "ArayaBagh",
    proposedRoute: "/araya-bagh",
    finalFolder: "ArayaBagh",
    address: "100 Ft. Road, Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi 110030, India",
    cityLocality: "Ghitorni, New Delhi",
    phone: "+91-8375967071",
    rating: 4.5,
    reviewCount: 12,
    starClassification: null,
    tags: ["Luxury farm & banquet"],
    vegetarianPrice: 3600,
    nonVegetarianPrice: null,
    pricingNote:
      "WedMeGood starting ₹3,600/plate + taxes. Vegetarian also listed from ₹4,900/plate + taxes. Non-vegetarian per-plate price: not available from source.",
    shortDescription:
      "Araya Bagh is a luxury indoor-and-outdoor wedding venue on Mehrauli-Gurgaon Road in Ghitorni, South Delhi, with multiple halls and gardens for celebrations of about 50 to 1,500 guests.",
    fullDescription:
      "The official property lists five indoor and outdoor spaces on about 2.5 acres, including Alyasa Garden (up to about 800 guests), Avantaya indoor hall, and Ankaaya with an inner garden. Indoor space is listed at 8,740 sq. ft. and outdoor at 18,750 sq. ft. Official site parking is listed for about 200 cars, with four dressing rooms and lounge rooms. WedMeGood lists a 4.5/5 rating from 12 reviews, starting ₹3,600/plate + taxes and vegetarian from ₹4,900/plate + taxes.",
    googleSearch: "https://www.google.com/travel/search?q=Araya%20Bagh%20Ghitorni%20New%20Delhi",
    officialPages: [
      "https://www.arayabagh.com/our-venue",
      "https://www.arayabagh.com/",
      "https://www.weddingwire.in/wedding-lawns-farmhouses/araya-bagh--e425982",
    ],
    extraImageUrls: [],
    location: {
      displayAddress: "100 Ft. Road, Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi 110030, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Araya+Bagh,+Mehrauli-Gurgaon+Rd,+Ghitorni,+New+Delhi+110030&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Araya+Bagh,+Mehrauli-Gurgaon+Rd,+Ghitorni,+New+Delhi+110030",
    },
    venuePolicies: {
      categories: [
        {
          title: "Timings & Slots",
          icon: "⏰",
          items: ["Morning: 8:00 AM - 12:00 PM", "Evening: 5:00 PM - 2:00 AM"],
        },
        { title: "Changing Rooms", icon: "🚪", items: ["4 complimentary A/C changing rooms"] },
        { title: "Parking", icon: "🚗", items: ["Parking available for 50 vehicles"] },
        { title: "Cancellation", icon: "❌", items: ["Cancellable"] },
        { title: "Lodging", icon: "🏨", items: ["No rooms available"] },
        {
          title: "Food",
          icon: "🍽️",
          items: [
            "Food provided by the venue",
            "In-house catering only",
            "Outside food/caterer not allowed",
            "Veg and non-veg available",
          ],
        },
        { title: "Alcohol", icon: "🍾", items: ["In-house alcohol only"] },
        {
          title: "Decoration",
          icon: "🎨",
          items: ["Decoration provided by the venue", "Outside decorators not allowed"],
        },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "F&B tax: 18%",
            "Advance: 25% at the time of booking",
            "No late music",
            "Baarat allowed",
            "No firecrackers",
            "Hawan allowed",
            "No overnight wedding",
            "Halls are air-conditioned",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 10,
    slug: "zorba-entertainment-mg-road",
    name: "Zorba Entertainment MG Road",
    proposedComponent: "ZorbaEntertainmentMgRoad",
    proposedRoute: "/zorba-entertainment-mg-road",
    finalFolder: "ZorbaEntertainmentMgRoad",
    address: "166, MG Road, Sultanpur, Near Sultanpur Metro Station, New Delhi, Delhi 110030, India",
    cityLocality: "Sultanpur, New Delhi",
    phone: "+91-8375967071",
    rating: 4.7,
    reviewCount: 23,
    starClassification: null,
    tags: ["Farmhouse"],
    vegetarianPrice: 5450,
    nonVegetarianPrice: null,
    pricingNote:
      "WedMeGood starting ₹5,450/plate + taxes. Vegetarian also listed at ₹5,850/plate + taxes. Non-vegetarian per-plate price: not available from source.",
    shortDescription:
      "Zorba Entertainment on MG Road near Sultanpur Metro Station is a farmhouse wedding venue with a garden-and-villa setup and an amphitheatre for outdoor celebrations.",
    fullDescription:
      "WedMeGood lists The Garden + The Villa at 200 seating / 450 floating and the Amphitheatre at 300 seating / 600 floating. Catering is in-house only, décor is in-house, in-house DJ is available and outside DJ is permitted, outside alcohol is permitted (in-house alcohol not listed as available), complimentary changing rooms are offered, parking and valet are available, and functions under 50 pax are allowed. Starting price is listed at ₹5,450/plate + taxes.",
    googleSearch: "https://www.google.com/travel/search?q=Zorba%20Entertainment%20Sultanpur%20MG%20Road",
    officialPages: [
      "https://www.weddingwire.in/wedding-lawns-farmhouses/zorba-entertainment-sultanpur--e22179",
    ],
    extraImageUrls: [
      "https://cdn0.weddingwire.in/vendor/2179/3_2/1280/jpg/-91a8990_15_22179-1563369953.jpeg",
      "https://cdn0.weddingwire.in/vendor/2179/3_2/1280/jpg/-91a7104_15_22179-1563355121.jpeg",
    ],
    location: {
      displayAddress: "166, MG Road, Sultanpur, Near Sultanpur Metro Station, New Delhi, Delhi 110030, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Zorba+Entertainment,+166+MG+Road,+Sultanpur,+New+Delhi+110030&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=166,+MG+Road,+Sultanpur,+Near+Sultanpur+Metro+Station,+New+Delhi+110030",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Not available from source"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Complimentary changing rooms for the couple (WedMeGood)"] },
        { title: "Parking", icon: "🚗", items: ["Parking available", "Valet parking available"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["Not available from source"] },
        { title: "Food", icon: "🍽️", items: ["In-house catering only"] },
        {
          title: "Alcohol",
          icon: "🍾",
          items: ["In-house alcohol not available", "Outside alcohol permitted"],
        },
        { title: "Decoration", icon: "🎨", items: ["In-house décor"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Venue type: farmhouse with indoor and outdoor space",
            "The Garden + The Villa: 200 seating / 450 floating",
            "Amphitheatre: 300 seating / 600 floating",
            "In-house DJ available; outside DJ permitted",
            "Less than 50 pax allowed",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 11,
    slug: "lata-greens",
    name: "Lata Greens",
    proposedComponent: "LataGreens",
    proposedRoute: "/lata-greens",
    finalFolder: "LataGreens",
    address: "Mehrauli-Gurgaon Rd, Near Pillar No. 31B, Sultanpur, New Delhi, Delhi 110030, India",
    cityLocality: "Sultanpur / Chattarpur, New Delhi",
    phone: "+91-8375967071",
    rating: 3.9,
    reviewCount: 14,
    starClassification: null,
    tags: ["Banquet hall & lawn"],
    vegetarianPrice: 3500,
    nonVegetarianPrice: null,
    pricingNote:
      "WedMeGood starting ₹3,500/plate + taxes. Vegetarian also listed at ₹3,800/plate + taxes. Non-vegetarian per-plate price: not available from source.",
    shortDescription:
      "Lata Greens is an indoor-and-outdoor banquet and lawn venue on Mehrauli-Gurgaon Road in Sultanpur, used for weddings and related functions.",
    fullDescription:
      "WedMeGood lists starting ₹3,500/plate + taxes and vegetarian from ₹3,800/plate + taxes, with a 3.9/5 rating from 14 reviews. Area capacities: indoor + outdoor 500 seating / 1,200 floating; hall 200 seating / 400 floating; lawn 300 seating / 700 floating. Main policy listings used here (not the conflicting FAQ slot) give morning 11:00 AM–4:00 PM and evening 7:00 PM–12:00 AM, parking for about 100 vehicles with valet, non-cancellation, 25% deposit to hold a date, and food provided by the venue with no outside caterer.",
    googleSearch: "https://www.google.com/travel/search?q=Lata%20Greens%20Sultanpur%20MG%20Road",
    officialPages: [
      "https://weddingz.in/delhi/lata-greens-mehrauli/",
      "https://www.wedmegood.com/wedding-venues/lata-greens-sultanpur-mg-road-14080",
    ],
    extraImageUrls: [],
    location: {
      displayAddress: "Mehrauli-Gurgaon Rd, Near Pillar No. 31B, Sultanpur, New Delhi, Delhi 110030, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Lata+Greens,+Mehrauli-Gurgaon+Rd,+Sultanpur,+New+Delhi+110030&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Lata+Greens,+Mehrauli-Gurgaon+Rd,+Sultanpur,+New+Delhi+110030",
    },
    venuePolicies: {
      categories: [
        {
          title: "Timings & Slots",
          icon: "⏰",
          items: ["Morning: 11:00 AM - 4:00 PM", "Evening: 7:00 PM - 12:00 AM"],
        },
        { title: "Changing Rooms", icon: "🚪", items: ["A/C changing rooms available"] },
        {
          title: "Parking",
          icon: "🚗",
          items: ["Parking space listed for about 100 vehicles", "Valet provided by the venue"],
        },
        {
          title: "Cancellation",
          icon: "❌",
          items: ["Non-cancellation listed on the main policy data", "25% deposit to reserve the date"],
        },
        { title: "Lodging", icon: "🏨", items: ["Not available from source"] },
        {
          title: "Food",
          icon: "🍽️",
          items: ["Food provided by the venue", "No outside food/caterer allowed (main policy listing)"],
        },
        { title: "Alcohol", icon: "🍾", items: ["Not available from source"] },
        { title: "Decoration", icon: "🎨", items: ["Not available from source"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Indoor + outdoor: 500 seating / 1,200 floating",
            "Hall: 200 seating / 400 floating",
            "Lawn: 300 seating / 700 floating",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 12,
    slug: "jhankar-banquets",
    name: "Jhankar Banquets",
    proposedComponent: "JhankarBanquets",
    proposedRoute: "/jhankar-banquets",
    finalFolder: "JhankarBanquets",
    address: "Asiad Tower Banquets Complex, Khel Gaon, New Delhi, Delhi 110049, India",
    cityLocality: "Asiad Tower, Khel Gaon, New Delhi",
    phone: "+91-8375967071",
    rating: null,
    reviewCount: null,
    starClassification: null,
    tags: ["Banquet & lawns"],
    vegetarianPrice: null,
    nonVegetarianPrice: null,
    pricingNote: "Not available from source — confirm current banquet pricing with the venue",
    shortDescription:
      "Jhankar Banquets currently markets Jhankar Banquet & Lawns Asiad Tower at Khel Gaon as an active wedding and events property. This page is not Jhankar Garden MG Road, and is not the discontinued WedMeGood Preet Vihar listing.",
    fullDescription:
      "The official website (jhankarbanquets.com) states the Asiad Tower / Asiad Village property has re-opened for weddings, corporates and events, with lawns including Village Lawn, Monument Lawn, Victoria Valley and Tower Hall, plus ample parking. WedMeGood’s Jhankar Banquets Preet Vihar listing was researched as discontinued, so Preet Vihar is not presented as the current venue. Jhankar Garden MG Road is a different property and is not used here. Current per-plate wedding pricing is not reliably verified for this page.",
    googleSearch: "https://www.google.com/travel/search?q=Jhankar%20Banquet%20Asiad%20Tower%20Khel%20Gaon",
    officialPages: [
      "https://www.jhankarbanquets.com/",
      "https://www.jhankarbanquets.com/jhankar-banquet-lawns-asiad-tower/",
    ],
    extraImageUrls: [
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/ntyntdfn-2.jpg",
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/1-2.jpg",
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/3.jpg",
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/4.jpg",
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/5.jpg",
      "https://www.jhankarbanquets.com/wp-content/uploads/2023/08/6.jpg",
    ],
    location: {
      displayAddress: "Asiad Tower Banquets Complex, Khel Gaon, New Delhi, Delhi 110049, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Jhankar+Banquets+Asiad+Tower,+Khel+Gaon,+New+Delhi+110049&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Asiad+Tower+Banquets+Complex,+Khel+Gaon,+New+Delhi+110049",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Office hours listed Mon–Sun 10:00 AM - 9:00 PM (official contact page)"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Not available from source"] },
        { title: "Parking", icon: "🚗", items: ["Ample parking listed on the official Asiad Tower page"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["Rooms: not listed as available on current verified listings"] },
        { title: "Food", icon: "🍽️", items: ["In-house catering referenced on current listings"] },
        { title: "Alcohol", icon: "🍾", items: ["Not available from source"] },
        { title: "Decoration", icon: "🎨", items: ["Not available from source"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Current official property: Asiad Tower, Khel Gaon (not Preet Vihar; not Jhankar Garden MG Road)",
            "Event spaces named on the official site: Village Lawn, Monument Lawn, Victoria Valley, Tower Hall",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 13,
    slug: "lutyens",
    name: "Lutyens",
    proposedComponent: "Lutyens",
    proposedRoute: "/lutyens",
    finalFolder: "Lutyens",
    address: "222/223, New Mangla Puri, Mehrauli-Gurgaon Road, New Delhi, Delhi 110030, India",
    cityLocality: "Sultanpur, New Delhi",
    phone: "+91-8375967071",
    rating: 4.3,
    reviewCount: 23,
    starClassification: null,
    tags: ["Hotel & banquet"],
    vegetarianPrice: 2200,
    nonVegetarianPrice: 2300,
    pricingNote: "WedMeGood vegetarian ₹2,200/plate and non-vegetarian ₹2,300/plate",
    shortDescription:
      "Lutyens is a hotel and banquet venue at 222/223 New Mangla Puri on Mehrauli-Gurgaon Road, with indoor, outdoor and terrace spaces for weddings and events.",
    fullDescription:
      "WedMeGood lists a 4.3/5 rating from 23 reviews, vegetarian ₹2,200 and non-vegetarian ₹2,300 per plate, about 8 guest rooms, and capacity in the roughly 75–650/700 range depending on space. The official site describes a 3.5-acre property with lawns and banquet facilities. Meeting-space listings give standing capacity up to about 700.",
    googleSearch: "https://www.google.com/travel/search?q=Lutyens%20Hotel%20Sultanpur%20MG%20Road",
    officialPages: ["https://lutyenshotels.com/", "https://lutyenshotels.com/weddings/"],
    extraImageUrls: [
      "https://lutyenshotels.com/wp-content/uploads/2024/06/main-picture.jpg",
      "https://lutyenshotels.com/wp-content/uploads/2024/05/replace-with-lobby.jpg",
      "https://lutyenshotels.com/wp-content/uploads/2024/05/Senate-Hall-1.jpg",
      "https://lutyenshotels.com/wp-content/uploads/2024/05/SL-02-e1722751187366.jpg",
      "https://lutyenshotels.com/wp-content/uploads/2024/10/Weddings-header-background.jpg",
      "https://lutyenshotels.com/wp-content/uploads/2024/05/Senate-Hall-1-scaled.jpg",
    ],
    location: {
      displayAddress: "222/223, New Mangla Puri, Mehrauli-Gurgaon Road, New Delhi, Delhi 110030, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Lutyens,+222/223+New+Mangla+Puri,+Mehrauli-Gurgaon+Road,+New+Delhi+110030&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=222/223,+New+Mangla+Puri,+Mehrauli-Gurgaon+Road,+New+Delhi+110030",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Not available from source"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Not available from source"] },
        { title: "Parking", icon: "🚗", items: ["Valet parking referenced on the official guest comments / hotel site"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["8 guest rooms listed"] },
        { title: "Food", icon: "🍽️", items: ["Not available from source"] },
        { title: "Alcohol", icon: "🍾", items: ["Not available from source"] },
        { title: "Decoration", icon: "🎨", items: ["Not available from source"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Capacity approximately 75–650/700 depending on configuration",
            "Indoor, outdoor and terrace event spaces",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 14,
    slug: "luxera-hotel-mg-road",
    name: "Luxera Hotel MG Road",
    proposedComponent: "LuxeraHotelMgRoad",
    proposedRoute: "/luxera-hotel-mg-road",
    finalFolder: "LuxeraHotelMgRoad",
    address: "Mehrauli-Gurgaon Rd, near Arjan Garh, Aya Nagar, New Delhi, Delhi 110047, India",
    cityLocality: "Aya Nagar, New Delhi",
    phone: "+91-8375967071",
    rating: 4.7,
    reviewCount: 11,
    starClassification: null,
    tags: ["Hotel & banquet"],
    vegetarianPrice: 2500,
    nonVegetarianPrice: 2700,
    pricingNote: "WedMeGood vegetarian ₹2,500/plate and non-vegetarian ₹2,700/plate (primary source; VenueMonk non-veg ₹3,500 not used)",
    shortDescription:
      "Luxera Hotel MG Road is a hotel banquet venue near Arjan Garh / Aya Nagar with indoor, outdoor and terrace spaces, 15 rooms and multiple event areas.",
    fullDescription:
      "WedMeGood (primary pricing source) lists 4.7/5 from 11 reviews, vegetarian ₹2,500 and non-vegetarian ₹2,700 per plate, capacity about 40–1,000, 15 rooms and 7 event spaces including IRIS, Victoria ballroom with lawn, glass house with lawn, and Royal decks. VenueMonk lists a conflicting non-veg price of ₹3,500; that figure is not shown here.",
    googleSearch: "https://www.google.com/travel/search?q=Luxera%20Hotel%20MG%20Road%20Aya%20Nagar",
    officialPages: [
      "https://luxerahotel.co.in/",
      "https://luxerahotel.co.in/catering.html",
      "https://www.wedmegood.com/wedding-venues/Luxera-Hotel-MG-Road-4138182",
      "https://www.wedmegood.com/wedding-venues/Luxera-Hotel-MG-Road-4138182/portfolio",
    ],
    extraImageUrls: [],
    location: {
      displayAddress: "Mehrauli-Gurgaon Rd, near Arjan Garh, Aya Nagar, New Delhi, Delhi 110047, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Luxera+Hotel,+Mehrauli-Gurgaon+Rd,+Aya+Nagar,+New+Delhi+110047&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Luxera+Hotel,+Mehrauli-Gurgaon+Rd,+Aya+Nagar,+New+Delhi+110047",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Not available from source"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Not available from source"] },
        { title: "Parking", icon: "🚗", items: ["Parking available"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["15 guest rooms listed"] },
        { title: "Food", icon: "🍽️", items: ["Catering available (in-house kitchen listed on the official site)"] },
        { title: "Alcohol", icon: "🍾", items: ["Not available from source"] },
        { title: "Decoration", icon: "🎨", items: ["Not available from source"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Capacity: 40–1,000",
            "7 event spaces listed (IRIS, Victoria ballroom + lawn, glass house, Royal decks, and related areas)",
            "Less than 50 pax allowed",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 15,
    slug: "flxho-cyber-one-royal-orbit",
    name: "FlxHo Cyber ONE Royal Orbit – Luxury Hotel DLF Cyber City",
    proposedComponent: "FlxhoCyberOneRoyalOrbit",
    proposedRoute: "/flxho-cyber-one-royal-orbit",
    finalFolder: "FlxhoCyberOneRoyalOrbit",
    address: "NR-42, Nathupur Road, DLF 3, Near Dronacharya Metro Station, Off MG Road, Gurgaon - 122002",
    cityLocality: "DLF Phase 3, Gurugram",
    phone: "+91-8375967071",
    rating: 4.7,
    reviewCount: 1447,
    starClassification: "3-star hotel",
    tags: ["3-star hotel"],
    vegetarianPrice: null,
    nonVegetarianPrice: null,
    pricingNote: "Official site room pricing starts around ₹2,800/day. Wedding per-plate pricing: Not available from source.",
    shortDescription:
      "FlxHo Cyber ONE Royal Orbit is a 3-star hotel near Dronacharya Metro Station / DLF Cyber City with rooms, restaurant, free parking, free Wi-Fi and a 24-hour front desk. A matching WedMeGood/VenueMonk wedding listing was not verified.",
    fullDescription:
      "Official property page: NR-42, Nathupur Road, DLF 3, near Dronacharya Metro Station, off MG Road, Gurgaon 122002. Listed amenities include air-conditioned rooms, restaurant (Chinese, Indian and Italian), free Wi-Fi, concierge, shared lounge, bar, room service and 24-hour front desk. Google rating is listed at 4.7 with about 1,447 reviews. Wedding-specific capacity, per-plate pricing, changing rooms, advance, cancellation, F&B tax and wedding slots were not verified and are not shown.",
    googleSearch: "https://www.google.com/travel/search?q=FlxHo%20Cyber%20ONE%20Royal%20Orbit%20Gurugram",
    officialPages: [
      "https://flxho.in/property/flxho-cyberone-business-hotel/",
      "https://www.royalorbit.co.in/",
    ],
    extraImageUrls: [
      "https://flxho.in/wp-content/uploads/2024/05/1.jpeg",
      "https://flxho.in/wp-content/uploads/2024/05/10.jpeg",
      "https://flxho.in/wp-content/uploads/2024/05/13.jpeg",
      "https://flxho.in/wp-content/uploads/2024/05/15.jpeg",
      "https://images.trvl-media.com/lodging/106000000/106000000/105994600/105994554/89a1fc9d.jpg",
      "https://images.trvl-media.com/lodging/106000000/106000000/105994600/105994554/feee4477.jpg",
      "https://images.trvl-media.com/lodging/106000000/106000000/105994600/105994554/e07c7afb.jpg",
      "https://images.trvl-media.com/lodging/106000000/106000000/105994600/105994554/31598515.jpg",
      "https://images.trvl-media.com/lodging/106000000/106000000/105994600/105994554/c02a6845.jpg",
    ],
    location: {
      displayAddress: "NR-42, Nathupur Road, DLF 3, Near Dronacharya Metro Station, Off MG Road, Gurgaon - 122002",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=FlxHo+Cyber+ONE+Royal+Orbit,+Nathupur+Road,+DLF+Phase+3,+Gurugram&z=15&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=NR-42,+Nathupur+Road,+DLF+3,+Near+Dronacharya+Metro+Station,+Gurgaon+122002",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Not available from source"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Not available from source"] },
        { title: "Parking", icon: "🚗", items: ["Free parking"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["Hotel rooms with air conditioning", "Official site room pricing starts around ₹2,800/day"] },
        { title: "Food", icon: "🍽️", items: ["Restaurant on site"] },
        { title: "Alcohol", icon: "🍾", items: ["Bar listed on the official property page"] },
        { title: "Decoration", icon: "🎨", items: ["Not available from source"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "3-star hotel",
            "Free Wi-Fi",
            "24-hour front desk",
            "Wedding banquet capacity and wedding policies: Not available from source",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
  {
    id: 16,
    slug: "regal-resort",
    name: "Regal Resort",
    proposedComponent: "RegalResort",
    proposedRoute: "/regal-resort",
    finalFolder: "RegalResort",
    address: "Satbari, Chattarpur, New Delhi, Delhi, India",
    cityLocality: "Chattarpur, New Delhi",
    phone: "+91-8375967071",
    rating: 4.7,
    reviewCount: 13,
    starClassification: null,
    tags: ["Resort"],
    vegetarianPrice: 1499,
    nonVegetarianPrice: null,
    pricingNote:
      "WedMeGood starting ₹1,499/plate + taxes. Vegetarian also listed at ₹1,799/plate + taxes. Non-vegetarian per-plate price: not available from source.",
    shortDescription:
      "Regal Resort in the Chattarpur / Satbari area is listed as a wedding venue with banquet, lawn and poolside spaces plus 50 rooms.",
    fullDescription:
      "WedMeGood lists 4.7/5 from 13 reviews, starting ₹1,499/plate + taxes and vegetarian ₹1,799/plate + taxes, 50 rooms, Banquet Hall 200 seating / 300 floating, Lawn 500 seating / 800 floating, Poolside 100 seating / 200 floating, and Banquet Hall + Poolside 200 seating / 300 floating. Policies listed: in-house catering, in-house décor, in-house DJ with outside DJ permitted, outside alcohol not permitted. An exact matching VenueMonk listing was not verified.",
    googleSearch: "https://www.google.com/travel/search?q=Regal%20Resort%20Satbari%20Chattarpur%20Delhi",
    officialPages: [
      "https://www.wedmegood.com/wedding-venues/Regal-Resort-26375604",
      "https://www.wedmegood.com/wedding-venues/Regal-Resort-26375604/portfolio",
    ],
    extraImageUrls: [
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1780558294_1000394669.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1772184402_WhatsApp_Image_2026_02_27_at_14.52.47.jpeg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1774432158_1000088205.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1775459563_1000388449.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1789028069_1000440238.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1788937358_1000440338.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1788855029_1000453975.jpg",
      "https://image.wedmegood.com/resized/1200X/uploads/member/26375604/1782202942_1000106314.jpg",
    ],
    location: {
      displayAddress: "Satbari, Chattarpur, New Delhi, Delhi, India",
      mapEmbedUrl: "https://maps.google.com/maps?q=Regal+Resort,+Satbari,+Chattarpur,+New+Delhi&z=15&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Regal+Resort,+Satbari,+Chattarpur,+New+Delhi",
    },
    venuePolicies: {
      categories: [
        { title: "Timings & Slots", icon: "⏰", items: ["Not available from source"] },
        { title: "Changing Rooms", icon: "🚪", items: ["Not available from source"] },
        { title: "Parking", icon: "🚗", items: ["Parking available"] },
        { title: "Cancellation", icon: "❌", items: ["Not available from source"] },
        { title: "Lodging", icon: "🏨", items: ["50 rooms listed"] },
        { title: "Food", icon: "🍽️", items: ["In-house catering only"] },
        { title: "Alcohol", icon: "🍾", items: ["Outside alcohol not permitted"] },
        { title: "Decoration", icon: "🎨", items: ["In-house décor"] },
        {
          title: "Other Policies",
          icon: "📌",
          items: [
            "Banquet Hall: 200 seating / 300 floating",
            "Lawn: 500 seating / 800 floating",
            "Poolside: 100 seating / 200 floating",
            "Banquet Hall + Poolside: 200 seating / 300 floating",
            "In-house DJ available; outside DJ permitted",
          ],
        },
      ],
    },
    googleReviewsSample: sampleReviews(4),
  },
];
