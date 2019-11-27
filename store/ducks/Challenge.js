const STATE = {
  loading: false,
  saved: false,
  challenge: null,
};

export const Types = {
  SAVE_CHALLENGE: 'challenge/SAVE',
  READ_CHALLENGE: 'challenge/READ',
  SAVED_CHALLENGE: 'challenge/SAVED',
};

export const Creators = {
  saveChallenge(payload) {
    return { type: Types.SAVE_CHALLENGE, payload };
  },
  readChallenge(payload) {
    return { type: Types.READ_CHALLENGE, payload };
  },
};

const reducer = (initialState = STATE, { type, payload }) => {
  switch (type) {
    case Types.SAVE_CHALLENGE:
      return { ...initialState, loading: true };
    case Types.SAVED_CHALLENGE:
      return { ...initialState, saved: true, loading: false };
    case Types.READ_CHALLENGE:
      return { ...initialState, loading: true, challenge: payload };
    default:
      return initialState;
  }
};

export default reducer;
