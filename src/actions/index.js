export function payload(data) {
  return {
    type: 'CARGAR_USUARIOS',
    payload: {
      data
    }
  }
}

export async function load() {
  return (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then(() => {
      dispatch(payload(response.json));
    })
    const data = await response.json();
    return data;
  }
}