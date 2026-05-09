import { useState } from 'react'

export default function TodoInput({ onAdd, onToggleAll, hasItems }) {
  const [value, setValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <div className="todo-input">
      {hasItems && (
        <button className="toggle-all" onClick={onToggleAll} aria-label="すべて切り替え">
          ❯
        </button>
      )}
      <input
        className="new-todo"
        placeholder="何をしますか？"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  )
}
