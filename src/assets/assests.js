import logo from './logo.png'
import food from './food.png'
import food1 from './food1.png'
import food2 from './food2.png'
import food3 from './food3.png'
import food4 from './food4.png'
import food5 from './food5.png'
import food6 from './food6.png'
import food7 from './food7.png'
import food8 from './food8.png'
import food9 from './food9.png'
import food10 from './food10.png'
import food11 from './food11.png'
import test from './test.png'
import test1 from './test1.png'
import test2 from './test2.png'


export const assets = {
    logo,
    food,
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9,
    food10,
    food11,
    test,
    test1,
    test2,
};

export const foodItems = [
    {
        _id: "1",
        name: "Sliced Cake",
        image: food1,
        price: 15,
        rating: 4.5,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    },
    {
        _id: "2",
        name: "Spaghetti Bolognese",
        image: food2,
        price: 12,
        rating: 4.7,
        description: "Classic Italian pasta dish with a rich tomato and meat sauce",
        category: "Pasta"
    },
    {
        _id: "3",
        name: "Grilled Salmon",
        image: food3,
        price: 18,
        rating: 4.8,
        description: "Freshly grilled salmon served with a side of vegetables",
        category: "Seafood"
    },
    {
        _id: "4",
        name: "Cheeseburger",
        image: food4,
        price: 10,
        rating: 4.2,
        description: "Juicy beef patty topped with melted cheese in a soft bun",
        category: "Fast Food"
    },
    {
        _id: "5",
        name: "Chicken Caesar Salad",
        image: food5,
        price: 8,
        rating: 4.6,
        description: "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing",
        category: "Salad"
    },
    {
        _id: "6",
        name: "Vegetarian Pizza",
        image: food6,
        price: 14,
        rating: 4.3,
        description: "Thin-crust pizza topped with a variety of fresh vegetables",
        category: "Pizza"
    },
    {
        _id: "7",
        name: "Chocolate Ice Cream",
        image: food7,
        price: 6,
        rating: 4.9,
        description: "Creamy chocolate ice cream made from the finest cocoa",
        category: "Dessert"
    },
    {
        _id: "8",
        name: "Tuna Sushi Roll",
        image: food8,
        price: 11,
        rating: 4.4,
        description: "Fresh tuna wrapped in sushi rice and seaweed",
        category: "Sushi"
    }
];

export const testimonial = [
    {
        _id: "1",
        image: test,
        name: "John Doe",
        description: "This service has completely transformed my business. Their attention to detail and customer service is outstanding!"
    },
    {
        _id: "2",
        image: test1,
        name: "Jane Smith",
        description: "I am extremely happy with the results. The team went above and beyond to deliver exactly what I needed."
    },
    {
        _id: "3",
        image: test2,
        name: "Michael Johnson",
        description: "Professional, efficient, and creative! I couldn’t ask for a better experience working with them."
    }
];
// export const navbarItems = [
//     { _id: "1", name: "About" },
//     { _id: "2", name: "Blog" },
//     { _id: "3", name: "Pricing" },
//     { _id: "4", name: "Contact Us" },
//     { _id: "5", name: "Login" },
//     { _id: "6", name: "Sign Up" }
// ];

export const navbarItems = [
    { _id: "1", name: "Home", link: "home" },
    { _id: "2", name: "About", link: "about" },
    { _id: "3", name: "Menu", link: "menu" },
    { _id: "4", name: "Services", link: "services" },
    { _id: "5", name: "Contact", link: "contact" },
    { _id: "6", name: "Sign Up", link: "signup" }
  ];
  
// assets/assets.js
export const cartData = [
    {
      id: 1,
      title: '230+ Locations',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      linkText: 'Learn More',
      image: 'https://treact.owaiskhan.me/static/media/celebration-icon.0d9bb9633fcda75b7632a11eaf12bbac.svg'
    },
    {
      id: 2,
      title: '50+ Trainers',
      description: 'Qualified professional trainers to guide you.',
      linkText: 'Learn More',
      image: 'https://treact.owaiskhan.me/static/media/chef-icon.866e076bd2347712ef1d5cb77189d5fb.svg'
    },
    {
      id: 3,
      title: '24/7 Availability',
      description: 'Our services are available round the clock.',
      linkText: 'Learn More',
      image: 'https://treact.owaiskhan.me/static/media/shop-icon.048628c95dd89e631ac8c652d04238fb.svg'
    }
  ];
  