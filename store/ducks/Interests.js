const STATE = {
  loading: false,
  saved: false,
  interests: [
    {id: '1', name: 'Quadrinhos'},
    {id: '2', name: 'Jogos'},
    {id: '3', name: 'Biologia'},
    {id: '4', name: 'Saúde'},
    {id: '5', name: 'Lógica'},
    {id: '7', name: 'Grays-Anatomy'},
    {id: '8', name: 'Quebra-Cabeças'},
    {id: '9', name: 'Dieta'},
  ],
};

export const Types = {
  SAVE_INTERESTS: 'interests/SAVE',
  READ_INTERESTS: 'interests/READ',
  RESET_INTERESTS: 'interests/RESET',
  SAVED_INTERESTS: 'interests/SAVED',
  SET_INTERESTS: 'interests/SET',
};

export const Creators = {
  saveInterests(payload) {
    return { type: Types.SAVE_INTERESTS, payload };
  },
  setInterests(payload) {
    return { type: Types.SET_INTERESTS, payload };
  },
  readInterests(){
    return {type: Types.READ_INTERESTS};
  },
  resetInterests() {
    return { type: Types.RESET_INTERESTS };
  },
};

const reducer = (initialState = STATE, { type, payload }) => {
  switch (type) {
    case Types.SAVE_INTERESTS:
      return { ...initialState, loading: true };
    case Types.READ_INTERESTS:
      return { ...initialState, loading: true };
    case Types.SET_INTERESTS: 
      return { ...initialState, ...payload };
    case Types.SAVED_INTERESTS:
      return { ...initialState, loading: false, saved: true };
    case Types.RESET_INTERESTS:
      return { ...initialState, loading: false, saved: false };
    case Types.READ_INTERESTS:
      return { ...initialState, loading: true, name: payload };
    default:
      return initialState;
  }
};

export default reducer;
