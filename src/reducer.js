export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //REMOVE after finished developing...
  token:
    "BQC9rJ1nQrFfRUC_vGIfwx_TY49glY0wc7rTexBRCl_WVmhk2Q…OAaWrVMT2zdETP2cFNC-goq_LJxXx5KYG5Y7sqzqxQVCG7EUx",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_Token":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
