const initialState = {
  entities: [],
}

function data(state = initialState, action) {
  switch(action.type) {
    case 'CARGAR_USUARIOS':
      return {entities: action.payload.data};
    default:
      return state;
  }
}

export default data;