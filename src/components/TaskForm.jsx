import { useState } from 'react'

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmed = title.trim()

    if (trimmed.length < 5 || trimmed.length > 100) {
      setError('O título deve ter entre 5 e 100 caracteres')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: trimmed, completed: false })
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.errors?.[0]?.message || data.message || 'Não foi possível criar a tarefa')
        return
      }

      const task = await response.json()
      onTaskCreated(task)
      setTitle('')
    } catch {
      setError('Não foi possível falar com a API')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="task-title" className="block text-sm font-medium text-gray-700">
        Nova tarefa
      </label>
      <div className="mt-1 flex gap-2">
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="O que precisa ser feito?"
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting ? 'Adicionando...' : 'Adicionar'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  )
}

export default TaskForm
