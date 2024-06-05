export const initialStateContor = {
  defaultValue: "exempluARamasConstant",
  contorValue: 0,
};

export function contorReducer(state, action) {
  console.log(state, action);
  //mereu cream copi la state nu lucram direct pe el
  switch (action.type) {
    case "CONTOR_PLUS": {
      const numar = state.contorValue + action.payload;
      return { ...state, contorValue: numar };
    }
    case "CONTOR_MINUS": {
      let newState = {
        ...state,
        contorValue: state.contorValue - action.payload,
      };
      console.log("newState=", newState);

      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateContor;
    }

    default:
      return state;
  }
}
