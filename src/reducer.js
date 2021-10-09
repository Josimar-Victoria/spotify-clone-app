export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQC9rJ1nQrFfRUC_vGIfwx_TY49glY0wc7rTexBRCl_WVmhk2Q…OAaWrVMT2zdETP2cFNC-goq_LJxXx5KYG5Y7sqzqxQVCG7EUx',
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
    default:
      return state;
  }
};

export default reducer;
