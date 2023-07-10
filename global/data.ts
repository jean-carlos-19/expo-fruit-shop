const categories = ["Oranges", "Bananas", "Pineapple", "Apple", "Cherry"];
const featuredFruits = [
  {
    name: "Australian Orange",
    price: "12.30",
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "orange",
    image: require("../assets/images/orange.png"),
    color: (opacity: string) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectari",
    shadow: "red",
    price: "12",
    stars: 3,
    desc: "Sweet and juicy",
    image: require("../assets/images/peach.png"),
    color: (opacity: string) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "purple",
    image: require("../assets/images/grapes.png"),
    color: (opacity: string) => `rgba(214, 195, 246, ${opacity})`,
  },

  {
    name: "Red Grapefruit",
    price: "30",
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "red",
    image: require("../assets/images/redOrange.png"),
    color: (opacity: string) => `rgba(255, 163, 120, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "green",
    image: require("../assets/images/greenApple.png"),
    color: (opacity: string) => `rgba(139, 243, 139, ${opacity})`,
  },
];

const cartItems = [
  {
    name: "Australian Orange",
    price: "12.30",
    qty: 4,
    desc: "Sweet and juicy",
    shadow: "orange",
    image: require("../assets/images/orange.png"),
    color: (opacity: string) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectari",
    shadow: "red",
    price: "12",
    qty: 3,
    desc: "Sweet and juicy",
    image: require("../assets/images/peach.png"),
    color: (opacity: string) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    qty: 2,
    desc: "Sweet and juicy",
    shadow: "purple",
    image: require("../assets/images/grapes.png"),
    color: (opacity: string) => `rgba(214, 195, 246, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    qty: 2,
    desc: "Sweet and juicy",
    shadow: "green",
    image: require("../assets/images/greenApple.png"),
    color: (opacity: string) => `rgba(139, 243, 139, ${opacity})`,
  },
];
export { cartItems, categories, featuredFruits };
