const initialState = {
  data: {}
}

function data(state, action) {
  switch(action.type) {
    case 'CARGAR_USUARIOS':
      return {...state, data: action.payload.data};
    default:
      return state;
  }
}