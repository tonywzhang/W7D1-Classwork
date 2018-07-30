import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import {ToDoList} from './todo_list';


const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (state) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
