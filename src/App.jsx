import { useTodos } from './hooks/useTodos'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import './App.css'

export default function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeCount,
    completedCount,
    totalCount,
  } = useTodos()

  return (
    <div className="app">
      <header>
        <h1>todos</h1>
      </header>
      <main className="card">
        <TodoInput onAdd={addTodo} onToggleAll={toggleAll} hasItems={totalCount > 0} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        {totalCount > 0 && (
          <TodoFilter
            filter={filter}
            onFilter={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        )}
      </main>
    </div>
  )
}
