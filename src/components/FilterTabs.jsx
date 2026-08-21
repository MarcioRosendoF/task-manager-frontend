function FilterTabs({ filter, onChange }) {
  const options = [
    { value: 'all', label: 'Todas' },
    { value: 'active', label: 'Ativas' },
    { value: 'completed', label: 'Concluídas' }
  ]

  return (
    <div className="mt-6 flex gap-4">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={
            filter === option.value
              ? 'text-sm font-medium text-blue-600'
              : 'text-sm text-gray-500 hover:text-gray-700'
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
