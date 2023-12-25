import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";
const Shop = () => {
  const amount = useSelector((state) => state.amount);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Deposite/Withdraw money</h2>
      <button
        disabled={amount === 0}
        className="btn btn-primary m-1 fs-4"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary m-1 fs-4"
        onClick={() => {
          dispatch(actionCreators.depositMoney(200));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
