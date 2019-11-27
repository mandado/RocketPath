const STATE = {
  loginModal: false,
  signupModal: false,
};

export const Types = {
  TOGGLE_LOGIN_MODAL: 'modal/TOGGLE_LOGIN_MODAL',
  TOGGLE_SIGNUP_MODAL: 'modal/TOGGLE_SIGNUP_MODAL',
};

export const Actions = {
  toggleLoginModal(payload) {
    return {
      type: Types.TOGGLE_LOGIN_MODAL,
      payload,
    };
  },
  toggleSignupModal(payload) {
    return {
      type: Types.TOGGLE_SIGNUP_MODAL,
      payload,
    };
  }
};

const reducer = (initialState = STATE, { type, payload }) => {
  switch (type) {
    case Types.TOGGLE_LOGIN_MODAL:
      return { 
        ...initialState,
        loginModal: payload,
       };
    case Types.TOGGLE_SIGNUP_MODAL:
      return { 
        ...initialState,
        signupModal: payload,
       };
  
    default:
      return initialState;
  }
};

export default reducer;
