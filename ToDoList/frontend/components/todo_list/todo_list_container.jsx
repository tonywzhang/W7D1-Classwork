import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import ToDoList from './todo_list';
import {receiveTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
