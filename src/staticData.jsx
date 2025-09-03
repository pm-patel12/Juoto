export var discountCouponData = [
  {
    discount: 2.0,
    type: "amount",
    code: "CELEBRATION",
    validTill: "2025-08-25",
    minOrder: 199.0,
    currency: "USD",
  },
  {
    discount: 10,
    type: "percent",
    code: "WELCOME10",
    validTill: "2025-09-10",
    minOrder: 100.0,
    currency: "USD",
  },
  {
    discount: 15,
    type: "percent",
    code: "FREEDOM15",
    validTill: "2025-08-31",
    minOrder: 250.0,
    currency: "USD",
  },
  {
    discount: 20.0,
    type: "amount",
    code: "SUMMER20",
    validTill: "2025-09-30",
    minOrder: 300.0,
    currency: "USD",
  },
  {
    discount: 25,
    type: "percent",
    code: "BIGSAVE25",
    validTill: "2025-10-15",
    minOrder: 500.0,
    currency: "USD",
  },
];

export var productCategoriesData = [
  {
    id: "1",
    label: "Bestseller",
  },
  {
    id: "2",
    label: "Newly Launched",
  },
  {
    id: "3",
    label: "Pita Pockets",
  },
  {
    id: "4",
    label: "Pizzas (Guiltfree)",
  },
  {
    id: "5",
    label: "Whole Wheat Sandwiches",
  },
  {
    id: "6",
    label: "Fresh Salads",
  },
  {
    id: "7",
    label: "Fruit Pop Jars",
  },
  {
    id: "8",
    label: "Desserts ",
  },
];

export var productsData = [
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza with fresh tomato sauce, mozzarella cheese, and basil leaves.",
    price: 12.99,
    discount_price: 10.99,
    tag: "favorite",
    is_vegetarian: true,
    photo: "https://example.com/images/margherita_pizza.jpg",
    variants: [
      {
        name: "Small",
        price: 8.99,
        discount_price: 7.49,
        is_vegetarian: true,
      },
      {
        name: "Large",
        price: 15.99,
        discount_price: 13.99,
        is_vegetarian: true,
      },
    ],
  },
  {
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken cooked in a spiced tomato, cream, and butter sauce, served with rice.",
    price: 14.99,
    discount_price: 12.99,
    tag: "new",
    is_vegetarian: false,
    photo: "https://example.com/images/chicken_tikka_masala.jpg",
    variants: [
      {
        name: "Spicy",
        price: 15.49,
        discount_price: 13.49,
        is_vegetarian: false,
      },
      {
        name: "Mild",
        price: 14.99,
        discount_price: 12.99,
        is_vegetarian: false,
      },
    ],
  },
  {
    name: "Vegetable Stir Fry",
    description:
      "Fresh mixed vegetables stir-fried with soy sauce and sesame oil, served with noodles.",
    price: 10.49,
    discount_price: null,
    tag: null,
    is_vegetarian: true,
    photo: "https://example.com/images/vegetable_stir_fry.jpg",
    variants: [],
  },
  {
    name: "Beef Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and special sauce on a sesame bun.",
    price: 9.99,
    discount_price: 8.49,
    tag: "favorite",
    is_vegetarian: false,
    photo: "https://example.com/images/beef_burger.jpg",
    variants: [
      {
        name: "With Cheese",
        price: 10.49,
        discount_price: 8.99,
        is_vegetarian: false,
      },
      {
        name: "Double Patty",
        price: 12.99,
        discount_price: 10.99,
        is_vegetarian: false,
      },
    ],
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    price: 7.99,
    discount_price: null,
    tag: null,
    is_vegetarian: true,
    photo: "https://example.com/images/caesar_salad.jpg",
    variants: [
      {
        name: "With Grilled Chicken",
        price: 9.99,
        discount_price: null,
        is_vegetarian: false,
      },
    ],
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza with fresh tomato sauce, mozzarella cheese, and basil leaves.",
    price: 12.99,
    discount_price: 10.99,
    tag: "favorite",
    is_vegetarian: true,
    photo: "https://example.com/images/margherita_pizza.jpg",
    variants: [
      {
        name: "Small",
        price: 8.99,
        discount_price: 7.49,
        is_vegetarian: true,
      },
      {
        name: "Large",
        price: 15.99,
        discount_price: 13.99,
        is_vegetarian: true,
      },
    ],
  },
  {
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken cooked in a spiced tomato, cream, and butter sauce, served with rice.",
    price: 14.99,
    discount_price: 12.99,
    tag: "new",
    is_vegetarian: false,
    photo: "https://example.com/images/chicken_tikka_masala.jpg",
    variants: [
      {
        name: "Spicy",
        price: 15.49,
        discount_price: 13.49,
        is_vegetarian: false,
      },
      {
        name: "Mild",
        price: 14.99,
        discount_price: 12.99,
        is_vegetarian: false,
      },
    ],
  },
  {
    name: "Vegetable Stir Fry",
    description:
      "Fresh mixed vegetables stir-fried with soy sauce and sesame oil, served with noodles.",
    price: 10.49,
    discount_price: null,
    tag: null,
    is_vegetarian: true,
    photo: "https://example.com/images/vegetable_stir_fry.jpg",
    variants: [],
  },
  {
    name: "Beef Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and special sauce on a sesame bun.",
    price: 9.99,
    discount_price: 8.49,
    tag: "favorite",
    is_vegetarian: false,
    photo: "https://example.com/images/beef_burger.jpg",
    variants: [
      {
        name: "With Cheese",
        price: 10.49,
        discount_price: 8.99,
        is_vegetarian: false,
      },
      {
        name: "Double Patty",
        price: 12.99,
        discount_price: 10.99,
        is_vegetarian: false,
      },
    ],
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    price: 7.99,
    discount_price: null,
    tag: null,
    is_vegetarian: true,
    photo: "https://example.com/images/caesar_salad.jpg",
    variants: [
      {
        name: "With Grilled Chicken",
        price: 9.99,
        discount_price: null,
        is_vegetarian: false,
      },
    ],
  },
];
