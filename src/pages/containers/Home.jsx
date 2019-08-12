import React from 'react';
import Menu from '../components/menu.jsx';
import Usuarios from '../usuarios/containers/index.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <p>Hola Mundo, Bienvenidos a React! </p>
        <Usuarios />
      </div>
    )
  }
}

export default Home;