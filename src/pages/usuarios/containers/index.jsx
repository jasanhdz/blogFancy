import React from 'react';

class Usuarios extends React.Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'Fernando Bermudez',
          correo: 'fernando@hotmail.com',
          website: 'fernando.com.mx'
        },
        {
          nombre: 'Roberto Bermudez',
          correo: 'roberto@hotmail.com',
          website: 'roberto.com.mx'
        },
        {
          nombre: 'Victoria Bermudez',
          correo: 'victoria@hotmail.com',
          website: 'victoria.com.mx'
        }
      ]
    }
  }
  render() {
    return (
      <table>
        <tread>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Email
            </th>
            <th>
              Website
            </th>
          </tr>
        </tread>
        <tebody>
          <tr>
            <td>
              {this.state.usuarios[0].nombre}
            </td>
            <td>
              {this.state.usuarios[0].correo}
            </td>
            <td>
              {this.state.usuarios[0].email}
            </td>
          </tr>
        </tebody>  
      </table>
    )
  }
}

export default Usuarios;