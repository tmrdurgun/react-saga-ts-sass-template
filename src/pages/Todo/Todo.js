import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getTodos
} from '../../store/actions';

import { createStructuredSelector } from 'reselect';

import {
  selectTodos,
} from '../../store/selectors/';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.getTodos();
  }


  render() {
    const { todos } = this.props;

    console.log('todos: ', todos);

    return (
      <div>
        ANAN
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  todos: selectTodos(),
});

const mapDispatchToProps = dispatch => (
  (
    bindActionCreators({
      getTodos,
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
