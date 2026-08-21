import { useState } from 'react'

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(task.title)

  function startEditing() {
    setDraft(task.title)
    setEditing(true)
  }

  function cancelEditing() {
    setEditing(false)
  }

  async function handleSave() {
    const trimmed = draft.trim()

    if (trimmed.length < 5 || trimmed.length > 100) {
      window.alert('O título deve ter entre 5 e 100 caracteres')
      return
    }

    const saved = await onUpdate(task, trimmed)
    if (saved) {
      setEditing(false)
    }
  }

  if (editing) {
    return (
      <li className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') handleSave()
            if (event.key === 'Escape') cancelEditing()
          }}
          autoFocus
          className="flex-1 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="button"
          onClick={handleSave}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={cancelEditing}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancelar
        </button>
      </li>
    )
  }

  return (
    <li className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
        className="h-4 w-4 accent-blue-600"
      />
      <span className={task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}>
        {task.title}
      </span>
      <button
        type="button"
        onClick={startEditing}
        className="ml-auto text-sm text-gray-500 hover:text-gray-700"
      >
        Editar
      </button>
      <button
        type="button"
        onClick={() => onDelete(task)}
        className="text-sm text-red-600 hover:text-red-800"
      >
        Excluir
      </button>
    </li>
  )
}

export default TaskItem
