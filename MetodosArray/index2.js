const numbers = [1, 2, 3, 4, 2, 10, 31];

// SOME: Si alguno de los elementos cumple con la condición, se devuelve true
const isPairAnyNumber = numbers.some((el) => el % 2 == 0);
// console.log(isPairAnyNumber);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const isNotDelivered = orders.some((el) => !el.delivered);
//console.log(isNotDelivered);

// EVERY: Si todos los elementos cumplen con una condición, devuelve TRUE
const arePairAllNumbers = numbers.every((el) => el % 2 == 0);
//console.log(arePairAllNumbers);

const areNotAllDelivered = orders.every((el) => !el.delivered);
//console.log(isNotDelivered);

// FIND: Devuelve el PRIMER elemento que cumpla con la condición. Si no encuentra, devuelve UNDEFINED
const fistPairNumber = numbers.find((el) => el % 2 == 0);
// console.log(fistPairNumber);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const hotCakes = products.find((el) => el.id == "🥞");
// console.log(hotCakes);

// FINDINDEX: devuelve el ÍNDICE del PRIMER elemento que cumple con la condición

const hotCakesIndex = products.findIndex((el) => el.id == "🥞");
console.log(hotCakesIndex);
