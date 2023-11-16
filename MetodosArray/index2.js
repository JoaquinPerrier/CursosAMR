/*Contenido: SOME, EVERY, FIND, FINDINDEX, INCLUDES, JOIN, CONCAT*/

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

// FINDINDEX: devuelve el ÍNDICE del PRIMER elemento que cumple con la condición. Si no encuentra, devuelve -1

const hotCakesIndex = products.findIndex((el) => el.id == "🥞");
// console.log(hotCakesIndex);

// INCLUDES: Devuleve booleano indicando si está o no el elemento pasado como param. NO SE PASA CALLBACK
const pets = ["Cat", "Parrot", "Rabbit", "Dog"];
const isRabbitIncluded = pets.includes("Cat");
//console.log(isRabbitIncluded);

// JOIN: Sirve para unificar un array en un string
const elements = ["Fire", "Air", "Water"];
// console.log(elements.join(", "));
const title = "Cursos de la mutual AMR";
// console.log(title.split(" ").join("-").toLowerCase());

// CONCAT: Fusciona arrays, devolviendo uno nuevo
const elements2 = ["Rock", "Steal"];
//console.log(elements.concat(elements2));

// FLAT: sirve para manejar arrays dentro de arrays y los convierte en "una sola linea"
const matris = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(matris.flat());

// FLATMAP: primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flat
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];
// console.log(users.map((user) => user.attributes).flat());
// console.log(users.flatMap((users) => users.attributes));

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta = Object.values(calendars);
console.log(rta.flatMap((calendar) => calendar.map((item) => item.startDate)));
