const STATE = {
  token: undefined,
  loading: false,
};

export const Types = {
  SUBMIT_LOGIN: 'header/SUBMIT_LOGIN',
  LOGOUT: 'header/LOGOUT',
  SUBMIT_SIGNUP: 'header/SUBMIT_SIGNUP',
  RESPONSE: 'header/RESPONSE'
};

export const Creators = {
  submitLogin(payload) {
    return { type: Types.SUBMIT_LOGIN, payload };
  },
  submitSignup(payload) {
    return { type: Types.SUBMIT_SIGNUP, payload };
  },
  logout() {
    return { type: Types.LOGOUT, payload };
  }
};

const reducer = (initialState = STATE, { type, payload }) => {
  switch (type) {
    case Types.SUBMIT_LOGIN:
      return { ...initialState, loading: true };
    case Types.SUBMIT_SIGNUP:
      return { ...initialState, loading: true };
    case Types.RESPONSE:
      return {  ...payload, loading: false };
    default:
      return initialState;
  }
};

export default reducer;
