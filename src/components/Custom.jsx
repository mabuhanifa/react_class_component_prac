import React from "react";

let state;

function createState(setState) {
  if (state === undefined) {
    state = setState;
  }
  function getState(newState) {
    state = newState;
  }
  return [state, getState];
}

export default function Custom() {
  const state = createState("5");
  console.log(state);
  return <div>Custom</div>;
}
