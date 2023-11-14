const letters = ["a", "b", "c"];

// FOR EACH: recorre elemento por elemento el arreglo
letters.forEach((el, index, arreglo) => {
  console.log(el);
  // console.log(index);
  // console.log(arreglo);
});

// MAP: Devuelve un nuevo arreglo, aplicando la funcion a cada elemento del array original
const newLetters = letters.map((el) => el + " ");
console.log(newLetters);

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
