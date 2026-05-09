import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(text) => onEdit(todo.id, text)}
        />
      ))}
    </ul>
  )
}
