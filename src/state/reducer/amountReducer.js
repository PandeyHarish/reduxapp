const reducer = (state = 0, action) => {
  if (action === "deposite") {
    return state + action.payload;
  } else if (action === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;