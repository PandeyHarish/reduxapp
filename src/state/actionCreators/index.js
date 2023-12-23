export const withdrawCash = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const depositeCash = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposite",
      payload: amount,
    });
  };
};
