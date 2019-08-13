const initialState = {
  pictures: [],
}

function pictures(state = initialState, action) {
  switch(action.type) {
    case 'CARGAR_FOTOS':
      return {pictures: action.payload.data };
    default:
      return state;
  }
}

export default pictures;