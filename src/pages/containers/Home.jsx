import React, {Component} from 'react';
import Menu from '../components/menu.jsx';
import Table from '../usuarios/components/table.jsx';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/index';
import Playlist from '../usuarios/components/playlist.jsx';
import HomeLayout from '../components/layout.jsx';
import Title from '../components/title.jsx';

class Home extends Component {
  componentDidMount() {
    this.props.actions.load('https://jsonplaceholder.typicode.com/users')
    this.props.actions.pics('https://jsonplaceholder.typicode.com/photos')
  }
  render() {
    return (
      <HomeLayout>
        <Menu />
        <Title />
        <Table 
          users={this.props.users}
        />
        <Playlist 
          fotos={this.props.fotos}
        />
      </HomeLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.data.entities,
    fotos: state.media.pictures
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);