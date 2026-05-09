const FILTERS = [
  { key: 'all', label: 'すべて' },
  { key: 'active', label: '未完了' },
  { key: 'completed', label: '完了済み' },
]

export default function TodoFilter({ filter, onFilter, activeCount, completedCount, onClearCompleted }) {
  return (
    <footer className="todo-footer">
      <span className="count">
        残り <strong>{activeCount}</strong> 件
      </span>
      <div className="filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={['filter-btn', filter === f.key && 'active'].filter(Boolean).join(' ')}
            onClick={() => onFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </footer>
  )
}
