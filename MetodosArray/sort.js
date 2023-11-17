const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
// numbers.sort((a, b) => a - b); // Ordena de menor a mayor
numbers.sort((a, b) => b - a); // Ordena de mayor a menor
console.log(numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort();
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort((a, b) => b.total - a.total); // Ordena de mayor a menor, dependiendo del TOTAL
console.log(orders);
