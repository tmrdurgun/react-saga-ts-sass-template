import React, { Component } from 'react';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  getTodos
} from '../../store/actions';

import { createStructuredSelector } from 'reselect';

import {
  selectTodos,
} from '../../store/selectors';

import { ITodo } from './ITodo';

class Todo extends Component <ITodo> {
  constructor(props: ITodo) {
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
  (
    bindActionCreators({
      getTodos,
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
