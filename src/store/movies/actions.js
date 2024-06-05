export function moviesPlus(id) {
  return {
    type: "MOVIES_PLUS",
    payload: id,
  };
}

export function moviesMinus(id) {
  return {
    type: "MOVIES_MINUS",
    payload: id,
  };
}

export function returnToDefault() {
  return {
    type: "RETURN_TO_DEFAULT",
  };
}
