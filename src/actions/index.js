export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deletFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
