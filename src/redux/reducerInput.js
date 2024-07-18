export const actualInput = (newInput) => ({
  type: "inputValue",
  payload: newInput,
});

export const initialState = {
  input: "",
};

export const reducerInput = (state = initialState, action) => {
  switch (action.type) {
    case "inputValue":
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
