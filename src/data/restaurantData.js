// Delli Bites restaurant content and media assets

export const DRIVE_CDN = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const RESTAURANT_INFO = {
  name: "Delli Bites",
  tagline: "Find the best Indian Flavours in Uxbridge",
  address: "40 Windsor Street, Uxbridge UB8 1AB, United Kingdom",
  shortAddress: "40 Windsor Street, UB8 1AB",
  phone: "01895810893",
  displayPhone: "01895 810893",
  email: "info@dellibites.co.uk",
  hours: [
    { days: "Monday - Thursday", time: "12:00 PM – 10:30 PM" },
    { days: "Friday - Saturday", time: "12:00 PM – 11:00 PM" },
    { days: "Sunday", time: "12:00 PM – 10:00 PM" }
  ],
  socials: {
    instagram: "https://www.instagram.com/delli.bites/",
    facebook: "https://web.facebook.com/delli.bites?_rdc=1&_rdr#",
    tripadvisor: "https://www.tripadvisor.ie/Restaurant_Review-g1646049-d29011179-Reviews-Delli_Bites-Uxbridge_Greater_London_England.html",
    thefork: "https://www.thefork.com/restaurant/delli-bites-r836415"
  },
  links: {
    orderOnline: "https://order.dellibites.co.uk/",
    bookTable: "https://order.dellibites.co.uk/Uxbridge/booking-table/default"
  },
  apps: {
    ios: "https://apps.apple.com/gb/app/delli-bites/id6742140977",
    android: "https://play.google.com/store/apps/details?id=com.mitakeaway.dellibites&pli=1",
    directOrder: "https://order.dellibites.co.uk/"
  }
};

export const HERO_IMAGES = [
  {
    id: "1moa38UCn089KXG5Hzbp7Lu8E7IWf2Qtp",
    title: "Signature Feast",
    caption: "Authentic Delhi Street-style & Tandoor curations"
  },
  {
    id: "137Ra3tmW2qfFSQRF8ecMAsat-mwDkArB",
    title: "Culinary Excellence",
    caption: "Crafted with aromatic, hand-pounded spices"
  },
  {
    id: "1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV",
    title: "The Perfect Pour",
    caption: "Exquisite cocktails & craft beverages"
  },
  {
    id: "1duRey8TeZv0uaZaG4cml89kEdPOlX13l",
    title: "Warm Ambience",
    caption: "Cosy modern dining in the heart of Uxbridge"
  }
];

export const TRUST_BADGES = [
  {
    id: "1ppJnCc4NpLR44CJ99uRNBJ_0nGGIH3JW",
    name: "Food Hygiene Rating 5",
    subtitle: "Highest FSA Standard Award"
  },
  {
    id: "18Fv-OnqTF1hpwZAGxkOm4mDbYdvLFYsZ",
    name: "Restaurant Guru Award",
    subtitle: "Recognised for Authentic Flavours"
  },
  {
    id: "1p8PhO5UOF-UF81CeSQ5DsFwKTyb8Xw4J",
    name: "Recommended by Restaurant Guru",
    subtitle: "Top Rated in Uxbridge"
  }
];

export const SIGNATURE_SECTIONS = [
  {
    key: "finest",
    title: "Our Finest Culinary Creations",
    image: "1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi",
    description:
      "Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh. Every dish is a celebration of authentic spices, bold flavours and culinary passion.",
    highlights: ["Creamy Butter Chicken", "Fiery Chicken 65", "Ajwaini Paneer Tikka", "Kashmiri Lamb Roganjosh"]
  },
  {
    key: "comfort",
    title: "A Celebration of Indian Comfort",
    image: "1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH",
    description:
      "Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.",
    highlights: ["Slow-Simmered Gravies", "Handcrafted Tandoori Breads", "Aromatic Dum Biryani", "Authentic Spices"]
  },
  {
    key: "pour",
    title: "The Perfect Pour, Every Time",
    images: ["1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV", "1op0EH9CmUa4jCoFk4f-6u_0GvvAs_7Ct"],
    description:
      "Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.",
    highlights: ["Signature Indian Cocktails", "Chilled Mango & Sweet Lassi", "Fine Wine Pairings", "Craft Beers & Spirits"]
  }
];

export const GALLERY_IMAGES = [
  {
    id: "1BMW_Aukz5wH0Dk22fv6RcUcxQZJd31CR",
    title: "Chargrilled Tandoori Platter",
    category: "Tandoor"
  },
  {
    id: "1KJFJ-CcFCTG5L8xcORYd44u8zwtylQdU",
    title: "Slow-Braised Rich Rogan Josh",
    category: "Curries"
  },
  {
    id: "1l1-mpbTlLJtMbzIcbuSuuuTP0xI1cF0_",
    title: "Delhi Street Samosa Chaat & Crisps",
    category: "Starters"
  },
  {
    id: "1M_UH6FomSbpinbMVThAW8HwUMATvApjU",
    title: "Aromatic Fragrant Dum Biryani",
    category: "Biryani"
  },
  {
    id: "1SmBOhZuUIoKH8SLsb04kXLW9yIopeXKD",
    title: "Freshly Baked Garlic & Butter Naan",
    category: "Breads"
  },
  {
    id: "1E7lWu_BNOUBDJD5Tuwp8bpUb2u0NKgtm",
    title: "Royal North-Indian Curry Spread",
    category: "Specialities"
  },
  {
    id: "1x9zftvlU0JoSxQvigcJPJHJiT5asQSwa",
    title: "Artisanal Spice-Infused Cocktail",
    category: "Beverages"
  }
];

export const APP_PROMO = {
  headline: "MORE FOOD. LESS FEES. MORE SAVINGS!",
  subheadline: "Why pay extra when you can order smarter? Download the Delhi Bites App and enjoy delicious food with exclusive app-only benefits.",
  image: "1Ah4TGFnrTkEchULkKHb-TU3Rxvu5OX58",
  perks: [
    {
      title: "FREE DELIVERY",
      detail: "On orders £35+ (within 3 miles radius)"
    },
    {
      title: "15% OFF",
      detail: "On collection orders over £35"
    },
    {
      title: "ORDER DIRECT",
      detail: "Save more, skip the middleman & eat happy!"
    }
  ]
};

export const REVIEWS = [
  {
    name: "Kerie Upton",
    rating: 5,
    text: "We have been eating here since opening, always amazing service and food, we would highly recommend",
    tag: "Regular Diner"
  },
  {
    name: "Noel Cowell",
    rating: 5,
    text: "popped in for the lunch time menu, lovely modern but cosy feel restaurant, food was fantastic and the staff friendly and attentive. definately a great addition to the uxbridge dinning scene",
    tag: "Lunch Visit"
  },
  {
    name: "Navjot Singh",
    rating: 5,
    text: "Delli Bite is one of the best places for delicious Indian food! Amazing flavours, authentic Indian spices, and excellent service make every visit special. If you find the food tasteless, maybe you haven’t experienced the true magic of Indian flavours! Highly recommended!",
    tag: "Verified Guest"
  },
  {
    name: "Louise Carsono",
    rating: 5,
    text: "We came here after reading positive reviews on TripAdvisor and were not disappointed! The range of dishes is excellent, there is a good balance of meat and non-meat options and everything we ordered was delicious. The service is also excellent. We were sat quickly, all our questions were answered and our orders went through promptly. Smiling, polite staff. Highly recommend and would definitely come back!",
    tag: "TripAdvisor Review"
  },
  {
    name: "Angie Addae",
    rating: 5,
    text: "Great food and great atmosphere and good value for money too. The butter chicken was delicious! We’ll be back for sure. And thank you to Arsh for the great hospitality as well.",
    tag: "Dining Experience"
  },
  {
    name: "Christopher Dias",
    rating: 5,
    text: "Had a lovely meal at this relatively new restaurant in Ubridge town centre. Great selection of beers and the lassis were fantastic. A very wide ranging menus with lovely meat curries, fish dishes and biryanis. Had the Goan fish curry and lamb bhuna with some pilaf rice. The garlic bread was also excellent. The staff were very friendly and engaging which made the experience even better.",
    tag: "Evening Dinner"
  }
];
