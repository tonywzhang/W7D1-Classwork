import React from 'react';
import {uniqueId} from "../../util/util_file";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(property) {
    return (event) => {
      console.log("updating...");
      this.setState({
        [property]: event.target.value
      });
    };
  }

  submit(event){
    console.log("submitting...");
      console.log(this.props);
      const submission = Object.assign(this.state, {id: uniqueId()});
      event.preventDefault();
      this.props.receiveTodo(submission);
  }

  render() {
    const {ToDo} = this.props;
    const {title} = this.state;
    const {body} = this.state;
    const {done} = this.state;
    return(
      <div>
        <h1>
          Welcome to To Do List
        </h1>
        <form onSubmit={this.submit}>
          <input value={title} onChange={this.update('title')} placeholder="Title goes here"/>
          <input value={body} onChange={this.update('body')} placeholder="Body goes here"/>
          <button>Submit To Do</button>
        </form>
      </div>

    );}

  }

  export default ToDoForm;
