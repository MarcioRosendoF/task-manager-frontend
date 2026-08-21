# Task Manager Frontend

Interface em React para a [Task Manager API](https://github.com/MarcioRosendoF/task-manager-api).

## Como rodar

1. Suba a API na porta 8080 (`./mvnw spring-boot:run` na pasta do backend).
2. `npm install`
3. `npm run dev`
4. Acesse http://localhost:5173

O Vite faz proxy de `/tasks` para `http://localhost:8080`, então o frontend chama a API com caminhos relativos.

