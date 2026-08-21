function TaskItem({ task }) {
  return (
    <li className="rounded-md border border-gray-200 bg-white px-3 py-2">
      <span className="text-gray-900">{task.title}</span>
    </li>
  )
}

export default TaskItem
