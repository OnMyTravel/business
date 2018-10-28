import { connect } from 'react-redux'
import Charte from '../components/Charte'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  return [{ message: 'TOTO' }];
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const ChartePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Charte)

export default ChartePage