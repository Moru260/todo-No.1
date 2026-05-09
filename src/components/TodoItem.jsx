import { useState, useRef, useEffect } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  const startEdit = () => {
    setEditing(true)
    setEditValue(todo.text)
  }

  const commit = () => {
    onEdit(editValue)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') commit()
    if (e.key === 'Escape') {
      setEditValue(todo.text)
      setEditing(false)
    }
  }

  return (
    <li className={['todo-item', todo.completed && 'completed', editing && 'editing'].filter(Boolean).join(' ')}>
      {editing ? (
        <input
          ref={inputRef}
          className="edit-input"
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={commit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <>
          <input
            type="checkbox"
            className="toggle"
            checked={todo.completed}
            onChange={onToggle}
          />
          <label onDoubleClick={startEdit}>{todo.text}</label>
          <button className="destroy" onClick={onDelete} aria-label="削除">×</button>
        </>
      )}
    </li>
  )
}
