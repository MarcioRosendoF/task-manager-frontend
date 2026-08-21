# Task Manager Frontend

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[Português](#portugues) | [English](#english)

---

<a name="portugues"></a>

## Português

Interface web em React para a [Task Manager API](https://github.com/MarcioRosendoF/task-manager-api), meu primeiro projeto Spring Boot. Este é o meu primeiro projeto prático com React: o frontend consome a API de CRUD de tarefas e cobre o fluxo completo de uma lista de tarefas, do cadastro à exclusão.

### Funcionalidades

- Listar tarefas
- Criar tarefa com validação (5 a 100 caracteres)
- Marcar como concluída
- Editar título inline (Enter salva, Esc cancela)
- Excluir com confirmação
- Filtrar por todas, ativas ou concluídas
- Contador de tarefas concluídas

### Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript (TypeScript fica para o próximo projeto)

### Como rodar

1. Suba a Task Manager API na porta 8080 (`./mvnw spring-boot:run` na pasta do backend)
2. `npm install`
3. `npm run dev`
4. Acesse http://localhost:5173

O Vite faz proxy de `/tasks` para `http://localhost:8080`, então o frontend chama a API com caminhos relativos, sem configurar CORS.

### Endpoints consumidos

- `GET /tasks` — lista todas as tarefas
- `POST /tasks` — cria uma tarefa
- `PUT /tasks/{id}` — atualiza (concluir ou editar o título)
- `DELETE /tasks/{id}` — exclui

---

<a name="english"></a>

## English

React web interface for the [Task Manager API](https://github.com/MarcioRosendoF/task-manager-api), my first Spring Boot project. This is my first hands-on project with React: the frontend consumes the task CRUD API and covers the full to-do list flow, from creation to deletion.

### Features

- List tasks
- Create task with validation (5 to 100 characters)
- Toggle completion
- Inline title editing (Enter saves, Esc cancels)
- Delete with confirmation
- Filter by all, active or completed
- Completed task counter

### Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript (TypeScript comes with the next project)

### How to run

1. Start the Task Manager API on port 8080 (`./mvnw spring-boot:run` in the backend folder)
2. `npm install`
3. `npm run dev`
4. Open http://localhost:5173

Vite proxies `/tasks` to `http://localhost:8080`, so the frontend calls the API with relative paths and no CORS setup.

### Consumed endpoints

- `GET /tasks` — list all tasks
- `POST /tasks` — create a task
- `PUT /tasks/{id}` — update (toggle completion or edit the title)
- `DELETE /tasks/{id}` — delete

---

Developed by [Marcio](https://github.com/MarcioRosendoF)
