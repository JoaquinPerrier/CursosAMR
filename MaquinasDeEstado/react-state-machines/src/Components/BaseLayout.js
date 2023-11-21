import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("Nuestra máquina: ", state);
  console.log("matches", state.matches("inicial"));
  console.log("matches", state.matches("tickets"));
  console.log("can", state.can("START"));
  return <div>Hola</div>;
};
