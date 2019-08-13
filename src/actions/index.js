export function payload(data) {
  return {
    type: 'CARGAR_USUARIOS',
    payload: {
      data,
    }
  }
}
export function pictures(data) {
  return {
    type: 'CARGAR_FOTOS',
    payload: {
      data,
    }
  }
}

export function load(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        const data = response.json()
        .then(data => {
          return dispatch(payload(data));
        })
      });
  }
}

export function pics(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        const data = response.json()
        .then(data => {
          console.log(data);
          return dispatch(pictures(data));
        })
      });
  }
}


