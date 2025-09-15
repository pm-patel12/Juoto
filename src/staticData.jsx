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
