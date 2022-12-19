// Not Require at all---------------------------------------

export const DepositMoney = (money) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: money,
    });
  };
};

export const WithdrawlMoney = (money) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: money,
    });
  };
};
