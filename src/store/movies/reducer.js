export const initialStateMovies = {
  moviesValue: [],
};

export function moviesReducer(state, action) {
  console.log(state, action);
  //mereu cream copi la state nu lucram direct pe el
  switch (action.type) {
    case "MOVIES_PLUS": {
      return { ...state, moviesValue: [action.payload, ...state.moviesValue] };
    }
    case "MOVIES_MINUS": {
      let newState = {
        ...state,
        moviesValue: state.moviesValue.filter(
          (movie) => movie.id !== action.payload
        ),
      };
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateMovies;
    }

    default:
      return state;
  }
}
