import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="mt-6 text-gray-600">Nenhuma tarefa por aqui</p>
  }

  return (
    <ul className="mt-6 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TaskList
