type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "bowls",
    title: "Rice and Noodles Bowls",
    desc: "A collection of our most beloved bowls, each a complete and balanced meal with fragrant grains, savory grilled proteins, pickled vegetables, and vibrant herbs.",
    img: "/bowls.png",
    color: "white",
  },
  {
    id: 2,
    slug: "sandwiches",
    title: "Vietnamese Sandwiches",
    desc: "Crispy baguettes filled with savory grilled meats, pâté, pickled vegetables, fresh herbs, and zesty sauces — a perfect fusion of French and Vietnamese flavors in every bite.",
    img: "/sandwiches.png",
    color: "white",
  },
  {
    id: 3,
    slug: "rolls",
    title: "Vietnamese Rolls",
    desc: "Fresh rice paper rolls packed with shrimp, pork, vermicelli, and herbs, or crispy fried rolls bursting with seasoned fillings — light, refreshing, and full of authentic Vietnamese taste.",
    img: "/rolls.png",
    color: "white",
  },
];


// {
//     id: 1,
//     slug: "bowls",
//     title: "Broken Rice with Grilled Pork Bowl (Cơm Tấm)",
//     desc: "A traditional Vietnamese dish featuring broken rice topped with grilled pork, pickled vegetables, and fresh herbs.",
//     img: "/Broken-rice.jpg",
//     price: 10
//     color: "white",
//   },
//   {
//     id: 2,
//     slug: "bowls",
//     title: "Grilled Pork Vermicelli Bowl (Bún Thịt Nướng)",
//     desc: "A refreshing bowl of vermicelli noodles topped with grilled pork, fresh vegetables, and a tangy fish sauce dressing.",
//     img: "/Grilled-Pork-Noodle.jpg",
//     color: "white",
//     price: 10
//   },
//   {
//     id: 3,
//     slug: "bowls",
//     title: "Savory Sticky Rice (Xôi Mặn)",
//     desc: "Bowl of sticky rice with lots of good toppings",
//     img: "/xoi.png",
//     color: "white",
//     price: 10
//   },

//   {
//     id: 4,
//     slug: "sandwiches",
//     title: "Grilled Pork Sandwich (Bánh Mì Thịt Nướng)",
//     desc: "A classic Vietnamese sandwich filled with grilled pork, pickled vegetables, fresh herbs, and spicy mayo on a crispy baguette.",
//     img: "/banhmi.png",
//     color: "white",
//     price: 9
//   },
//   {
//     id: 5,
//     slug: "rolls",
//     title: "House Spring Rolls (Gỏi Cuốn)",
//     desc: "Fresh rice paper rolls filled with shrimp, vermicelli noodles, lettuce, and herbs, served with a peanut dipping sauce.",
//     img: "/house roll.png",
//     color: "white",
//     price: 10
//   },
//   {
//     id: 6,
//     slug: "rolls",
//     title: "Shrimp Spring Rolls (Gỏi Cuốn Tôm)",
//     desc: "Delicious spring rolls filled with shrimp, vermicelli noodles, lettuce, and herbs, served with a tangy dipping sauce.",
//     img: "/ShrimpRoll.png",
//     color: "white",
//     price: 10
//   },
//   {
//     id: 7,
//     slug: "rolls",
//     title: "Egg Rolls (Chả Giò)",
//     desc: "Crispy fried rolls filled with a savory mixture of ground pork, mushrooms, and vegetables, served with a sweet and sour sauce.",
//     img: "/eggroll.png",
//     color: "white",
//     price: 10
//   },
//   {
//     id: 8,
//     slug: "drinks",
//     title: "Vietnamese Iced Coffee (Cà Phê Sữa Đá)",
//     desc: "A strong and sweet Vietnamese iced coffee made with dark roast coffee, sweetened condensed milk, and served over ice.",
//     img: "/icecoffee.png",
//     color: "white",
//     price: 5
//   },
//   {
//     id: 9,
//     slug: "drinks",
//     title: "Tropical Fruit Tea (Trà Trái Cây)",
//     desc: "A refreshing blend of tropical fruits steeped in tea, served chilled with a hint of mint.",
//     img: "/tropicaltea.png",
//     color: "white",
//     price: 6
//   },
//   {
//     id: 10,
//     slug: "drinks",
//     title: "Boba Milk Tea (Trà Sữa Trân Châu)",
//     desc: "A delightful milk tea with chewy tapioca pearls, available in various flavors like matcha, taro, and classic milk tea.",
//     img: "/bobatea.png",
//     color: "white",
//     price: 6
//   },