import React from 'react';
import Table  from '../components/table.jsx';
import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../../../actions/index'
class Usuarios extends React.Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          name: 'Fernando Bermudez',
          email: 'fernando@hotmail.com',
          website: 'fernando.com.mx'
        },
        {
          name: 'Roberto Bermudez',
          email: 'roberto@hotmail.com',
          website: 'roberto.com.mx'
        },
        {
          name: 'Victoria Bermudez',
          email: 'victoria@hotmail.com',
          website: 'victoria.com.mx'
        }
      ],
      columns: [
        'Name',
        'Email',
        'Website'
      ]
    }
  }
  componentDidMount() {
    this.props.actions.load();
  }
  render() {
    return <Table 
      users={this.state.usuarios}
      columns={this.state.columns}  
    />
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Usuarios);