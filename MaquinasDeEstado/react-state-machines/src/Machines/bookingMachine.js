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
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          CANCEL: "inicial",
        },
      },
      passengers: {
        on: {
          DONE: "tickets",
          ADD: {
            target: "passengers",
            actions: assign((context, event) =>
              context.passengers.push(event.newPassenger)
            ),
          },
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
