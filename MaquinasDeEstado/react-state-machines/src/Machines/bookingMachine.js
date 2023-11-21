import { createMachine, assign } from "xstate";

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "inicial",
    context: {
      passengers: [],
      selectedCountry: "",
    },
    states: {
      inicial: {
        on: {
          START: { target: "search", actions: "imprimirInicio" },
        },
      },
      search: {
        entry: "imprimirEntrada",
        exit: "imprimirSalida",
        on: {
          CONTINUE: "passengers",
          CANCEL: "inicial",
        },
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: "inicial",
        },
      },
      tickets: {
        on: {
          FINISH: "inicial",
        },
      },
    },
  },
  {
    actions: {
      imprimirInicio: () => {
        console.log("Imprimiendo inicio");
      },
      imprimirEntrada: () => {
        console.log("Imprimiendo entrada");
      },
      imprimirSalida: () => {
        console.log("Imprimiendo salida");
      },
    },
  }
);

export default bookingMachine;
