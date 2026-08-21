import { useEffect, useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch('/tasks')
        if (!response.ok) {
          throw new Error(`Erro ${response.status}`)
        }
        const data = await response.json()
        setTasks(data)
      } catch {
        setError('Não foi possível falar com a API')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
      {loading && <p className="mt-6 text-gray-600">Carregando tarefas...</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </div>
  )
}

export default App
