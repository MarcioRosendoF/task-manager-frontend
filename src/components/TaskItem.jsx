function TaskItem({ task, onToggle, onDelete }) {
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
        onClick={() => onDelete(task)}
        className="ml-auto text-sm text-red-600 hover:text-red-800"
      >
        Excluir
      </button>
    </li>
  )
}

export default TaskItem
