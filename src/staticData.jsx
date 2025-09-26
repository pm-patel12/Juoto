import bankAccount from "../src/assets/images/icons/bank-account.svg";
import cashDelivery from "../src/assets/images/icons/cash-delivery.svg";
import upi from "../src/assets/images/icons/upi.png";

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
export var BestsellersProducts = [
  {
    name: "Margherita Pizza",
    description:
      "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
    price: 12.99,
    discount_price: 10.99,
    tag: "favorite",
    is_vegetarian: true,
    isInStock: true,
    photo:
      "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
    isInStock: true,
    photo:
      "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
    isInStock: true,
    photo:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
    isInStock: true,
    photo:
      "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
    isInStock: true,
    photo:
      "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
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
      "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
    price: 12.99,
    discount_price: 10.99,
    tag: "favorite",
    is_vegetarian: true,
    isInStock: true,
    photo:
      "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
    isInStock: true,
    photo:
      "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
    isInStock: true,
    photo:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
    isInStock: true,
    photo:
      "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
    isInStock: true,
    photo:
      "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
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
export var ProductsList = [
  {
    name: "Margherita Pizza",
    description:
      "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
    price: 12.99,
    discount_price: 10.99,
    tag: "favorite",
    is_vegetarian: true,
    isInStock: true,
    photo:
      "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
    isInStock: true,
    photo:
      "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
    isInStock: true,
    photo:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
    isInStock: true,
    photo:
      "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
    isInStock: true,
    photo:
      "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
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
export var ProductsLabelWise = [
  {
    label: "🔔 Hot Release: Newly Launched",
    products: [
      {
        name: "Margherita Pizza",
        description:
          "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
        price: 12.99,
        discount_price: 10.99,
        tag: "favorite",
        is_vegetarian: true,
        isInStock: true,
        photo:
          "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
        isInStock: true,
        photo:
          "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
        isInStock: true,
        photo:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
        isInStock: true,
        photo:
          "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
        isInStock: true,
        photo:
          "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
        variants: [
          {
            name: "With Grilled Chicken",
            price: 9.99,
            discount_price: null,
            is_vegetarian: false,
          },
        ],
      },
    ],
  },
  {
    label: "Pita Pockets",
    products: [
      {
        name: "Margherita Pizza",
        description:
          "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
        price: 12.99,
        discount_price: 10.99,
        tag: "favorite",
        is_vegetarian: true,
        isInStock: true,
        photo:
          "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
        isInStock: true,
        photo:
          "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
        isInStock: true,
        photo:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
        isInStock: true,
        photo:
          "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
        isInStock: true,
        photo:
          "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
        variants: [
          {
            name: "With Grilled Chicken",
            price: 9.99,
            discount_price: null,
            is_vegetarian: false,
          },
        ],
      },
    ],
  },
  {
    label: "Pita Pizzas (Guiltfree)",
    products: [
      {
        name: "Margherita Pizza",
        description:
          "Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot hummus and boiled egg with fresh lettuce and black olives in a nutritious pita for a balanced meal.",
        price: 12.99,
        discount_price: 10.99,
        tag: "favorite",
        is_vegetarian: true,
        isInStock: true,
        photo:
          "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
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
        isInStock: true,
        photo:
          "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
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
        isInStock: true,
        photo:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
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
        isInStock: false,
        photo:
          "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg",
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
        isInStock: true,
        photo:
          "https://frenchkisscook.com/wp-content/uploads/2023/09/Greek-Caesar-Salad-with-Chicken-Vertical-Zoom.jpg",
        variants: [
          {
            name: "With Grilled Chicken",
            price: 9.99,
            discount_price: null,
            is_vegetarian: false,
          },
        ],
      },
    ],
  },
];
export var faqsData = [
  {
    question: "Q1. Do you offer home delivery?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q2. Can I customize my pizza toppings?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q3. Do you have vegetarian and vegan options?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q4. How can I place an order?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q5. What are your restaurant hours?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q6. Do you offer special deals or discounts?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
  {
    question: "Q7. Where are you located?",
    answer:
      "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
  },
];
export var deliveryType = [
  {
    id: 1,
    title: "Same Day Delivery",
    type: "same-day-delivery",
    instructions: [
      "Fee based on distance",
      "Free delivery over €15.00 items order",
      "Minimum order items €15.00",
    ],
  },
  {
    id: 2,
    title: "Standard delivery",
    type: "standard-delivery",
    instructions: [
      "Fee based on distance",
      "Free delivery over €30.00 items order",
      "Minimum order items €15.00",
      "deliver withing 2 to 3 working days after order",
    ],
  },
  {
    id: 3,
    title: "Selected Day Delivery",
    type: "selected-day-delivery",
    instructions: [
      "Fee based on distance",
      "Free delivery over €30.00 items order",
      "Minimum order items €15.00",
      "deliver as per select your date ",
    ],
  },
  {
    id: 4,
    title: "Self Pick up",
    type: "self-pick-up",
    instructions: ["Free delivery"],
  },
];
export var paymentOptions = [
  {
    id: 1,
    icon: cashDelivery,
    title: "Cash On Delivery",
    type: "cod",
    instructions: "Extra $2 COD Charge",
  },
  {
    id: 2,
    icon: bankAccount,
    title: "Direct Bank Account",
    type: "bank",
    instructions: "Take payments in person via BACS.",
  },
  {
    id: 3,
    icon: upi,
    title: "Pay on UPI",
    type: "upi",
    instructions: "10% OFF on via UPI Payment",
  },
];
export var customPageData = {
  1: {
    title: "About The Spice Garden",
    template: "default",
    content: `<p>Welcome to The Spice Garden, where every dish is a journeythrough flavor and tradition. 🍴✨</p><p>We believe that food is an experience — and our pizzas arecrafted to delight your senses. From our hand-kneaded doughto our signature spice blends, every recipe is designed tobring you warmth, freshness, and unforgettable taste.</p><p>At The Spice Garden, we mix classic Italian flavors with atouch of local spices to create pizzas that feel bothauthentic and unique. Whether it’s a cheesy Margherita, asizzling Tandoori Paneer, or a bold Pepperoni, our menu ismade to satisfy every craving.</p><ul><li>🌟 Why Choose The Spice Garden?</li><li>Fresh, farm-to-table ingredients 🌱</li><li>Authentic sauces made in-house 🍅</li><li>Customizable pizzas with your favorite toppings 🧀🍄</li><li>Quick delivery & cozy dine-in experience 🚚🏡</li></ul><p>Because here at The Spice Garden, it’s not just pizza — it’sa story of love, flavor, and togetherness. ❤️🍕</p>`,
  },
  2: {
    title: "Gallery",
    template: "gallery",
    content: [
      {
        id: 1,
        thumbnail:
          "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500",
        src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
      },
      {
        id: 4,
        thumbnail:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
      },
      {
        id: 2,
        thumbnail:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
      {
        id: 3,
        thumbnail:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500",
        src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      },
      {
        id: 5,
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500",
        src: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e",
      },
      {
        id: 6,
        thumbnail:
          "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=500",
        src: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
      },
      {
        id: 7,
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?w=500",
        src: "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6",
      },
      {
        id: 8,
        thumbnail:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
        src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
      },
      {
        id: 9,
        thumbnail:
          "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500",
        src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
      },
      {
        id: 10,
        thumbnail:
          "https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?w=500",
        src: "https://images.unsplash.com/photo-1487790343276-2fe56a7d9439",
      },
      {
        id: 11,
        thumbnail:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
      {
        id: 12,
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500",
        src: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df",
      },
      {
        id: 13,
        thumbnail:
          "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500",
        src: "https://images.unsplash.com/photo-1562059390-a761a084768e",
      },
      {
        id: 14,
        thumbnail:
          "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=500",
        src: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0",
      },
      {
        id: 15,
        thumbnail:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500",
        src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      },
      {
        id: 16,
        thumbnail:
          "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=500",
        src: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7",
      },
      {
        id: 17,
        thumbnail:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500",
        src: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
      },
    ],
  },
  3: {
    title: "Frequently Asked Questions",
    template: "faq",
    content: [
      {
        question: "Q1. Do you offer home delivery?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q2. Can I customize my pizza toppings?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q3. Do you have vegetarian and vegan options?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q4. How can I place an order?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q5. What are your restaurant hours?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q6. Do you offer special deals or discounts?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
      {
        question: "Q7. Where are you located?",
        answer:
          "Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 Yes! We deliver hot and fresh pizzas right to your doorstep within 30–40 minutes. 🚚🔥 ",
      },
    ],
  },
  4: {
    title: "Contact Information",
    template: "contact",
    content: ``,
  },
  5: {
    title: "Privacy Policy",
    template: "default",
    content: `<p>At The Spice Garden, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your  when you visit our website or place an order with us.</p><p><b>1. Information We Collect</b></p><p>When you use our services, we may collect the following information:</p><ul><li>Name, phone number, email address, and delivery address</li><li>Order details and preferences</li><li>Feedback, reviews, or queries submitted by you</li><li>Basic technical information (IP address, browser type, device details)</li></ul><p><b>2. How We Use Your Information</b></p><p>We use your information to:</p><ul><li>Process and deliver your orders</li><li>Send order confirmations and updates via WhatsApp, SMS, or email</li><li>Improve our menu, services, and customer experience</li><li>Respond to your questions and support requests</li><li>Share offers, promotions, and updates (only if you opt-in)</li></ul><p><b>3. Information Sharing</b></p><p>We do not sell, rent, or trade your personal information. Your data may only be shared with:</p><ul><li>Delivery partners to complete your order</li><li>Service providers (e.g., WhatsApp integration, hosting) for smooth operations</li><li>Authorities, if required by law</li></ul><p><b>4. Data Security</b></p><p>We take appropriate technical and organizational measures to protect your information against unauthorized access, loss, misuse, or .</p><p><b>5. Your Rights</b></p><p>You have the right to:</p><ul><li>Access the personal information we hold about you</li><li>Request corrections or updates to your data</li><li>Opt out of promotional communications at any time</li></ul>`,
  },
};
