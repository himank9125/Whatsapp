let inetialState = {
  session: false,
  codeSent: false,
  confirmation: null,
  users: ["99350123456", "9198512436", "9956241587"],
  currentuser: "0000000000",
  activeuser: "99350123456",
};
const reducer = (state = inetialState, action) => {
  switch (action.type) {
    case "sync": {
      return { ...state, users: action.data };
    }
    case "setactive": {
      return { ...state, activeuser: action.user };
    }
    case "update": {
      return { ...state, session: true, currentuser: action.phone };
    }
    case "codeSent": {
      return { ...state, codeSent: true, confirmation: action.confirmation };
    }
    default:
      return state;
  }
};

export default reducer;
