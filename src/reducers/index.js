const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
      break;
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
