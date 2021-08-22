import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
// wasn't able to import this addItem -- this lab may be outdated
import './App.css';

class App extends Component {

  state = {
    todo: ''
  }

  handleOnClick = event => {
    this.props.addItem()
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    this.props.dispatch({ type: 'ADD_TODO', todo: this.state.todo });
    this.setState({ todo: '' });
  }

  render() {
    debugger;
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);