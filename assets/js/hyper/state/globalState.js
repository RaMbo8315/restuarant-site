var companyInfo = {
  title: "Prime Steak Restaurant",
  phone: "(407) 963 - 7465",
  location: "605 Orange Ave, Orlando, Fl 32806"
}

var specialMenuData = [
  {
    title: "Super BBQ Grill No Smoke",
    description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
    price: 25
  },
  {
    title: "Chicken Fingers",
    description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
    price: 25
  },
  {
    title: "All American Hamburger",
    description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
    price: 25
  }
];

var reviewsData = [
  {
    company: "The Food Network",
    author: "Sandra Bennington",
    authorInfo: "#1 Chef in America",
    highlight: "Best Restaurant in Orlando!",
    review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
  },
  {
    company: "Master Chefs",
    author: "Janice Gillingham",
    authorInfo: "Winner of The Chef Masters",
    highlight: "They know Steak",
    review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
  },
  {
    company: "The Cooking Channel",
    author: "Aubrey Williams",
    authorInfo: 'Host of "From the Nose to the Tummy"',
    highlight: "#1 guess of the Year",
    review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
  },
  {
    company: "Grillin' and Chillin'",
    author: "Daryl Courtney",
    authorInfo: "Grill Master 2018",
    highlight: "From the Stove to the Grill These Guys Can Cook",
    review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
  },
  {
    company: "Masters of Fire",
    author: "Jacob Smith",
    authorInfo: "International Chef",
    highlight: "Best Restaurant in The South East!",
    review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
  }
];

var randomQuoteData = [
  {
    author: "Charles",
    quote: "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.", 
  },
  {
    author: "John",
    quote: "I don't always eat out; but when I do I eat here", 
  },
  {
    author: "Jill",
    quote: "When I eat here I feel so golden", 
  }
]


export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  },
  quoteStatus: {
    currentQuote: 0,
  }
}