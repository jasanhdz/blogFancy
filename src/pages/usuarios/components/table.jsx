import React from 'react'
import './table.css';

const Table = props => {
  return (
    <div className="Margen">
        <table className="Table">
          <thead>
            <tr>
            {
              props.columns.map((key) => (
                <th>
                  {key}
                </th>
              )) 
            }
            </tr>
          </thead>
          <tbody>
            {
              props.users.map((usuario) => (
              <tr>
                <td>
                  {usuario.name}
                </td>
                <td>
                  {usuario.email}
                </td>
                <td>
                  {usuario.website}
                </td>
              </tr>
              ))
            }
          </tbody>  
        </table>
      </div>
  )
}

export default Table;