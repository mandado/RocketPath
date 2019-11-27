const STATE = {
  challenges: [],
};

export const Types = {
  LOAD_PATHS: 'paths/LOAD_PATHS',
  SET_PATHS: 'paths/SET_PATHS',
};

export const Creators = {
  setPaths(payload) {
    return { type: Types.SET_PATHS, payload };
  },
  loadPaths() {
    return { type: Types.LOAD_PATHS };
  }
};

const reducer = (initialState = STATE, { type, payload }) => {
  switch (type) {
    case Types.LOAD_PATHS:
      return { ...initialState, loading: true };
    case Types.SET_PATHS:
      return { ...initialState, ...payload };
    default:
      return initialState;
  }
};

export default reducer;
