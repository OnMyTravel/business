import { connect } from 'react-redux'
import Offline from '../components/Offline'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  return [{ message: 'TOTO' }]
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const OfflinePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Offline)

export default OfflinePage
