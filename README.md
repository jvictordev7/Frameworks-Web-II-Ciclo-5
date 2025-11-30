# 🚀 Frameworks Web II — CRUD Fullstack

Aplicação fullstack para cadastro e gestão de usuários, com backend Spring Boot + JPA/MySQL e frontend Vite/React + Material UI.

## ✨ Principais recursos
- API REST para CRUD de usuários (`/api/users`)
- Persistência com Spring Data JPA + MySQL/MariaDB
- Configuração via `.env` (carregado pelo `spring.config.import`)
- Frontend moderno em React com UI responsiva e feedback visual

## 🧰 Stack
- **Backend:** Java 17, Spring Boot, Spring Data JPA, MySQL/MariaDB
- **Frontend:** Vite, React, Material UI, Axios
- **Build:** Maven, npm

## 📦 Estrutura
```
.
├── src/main/java/com/example/backend/...   # Código do backend
├── src/main/resources/application.properties
├── frontend/                               # Código do frontend (Vite/React)
└── .env                                    # Variáveis de ambiente (não versionar)
```

## 🔑 Configuração de ambiente
1) Crie um banco `aulaintegracao` no MySQL/MariaDB.
2) Crie o arquivo `.env` na raiz (já está no `.gitignore`):
   ```env
   SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/aulaintegracao
   SPRING_DATASOURCE_USERNAME=root
   SPRING_DATASOURCE_PASSWORD=
   SPRING_JPA_HIBERNATE_DDL_AUTO=update
   SPRING_JPA_SHOW_SQL=true
   SPRING_JPA_HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect
   ```
3) O `application.properties` já possui `spring.config.import=optional:dotenv:.env` para carregar essas variáveis.

## ▶️ Como rodar
### Backend
```bash
./mvnw spring-boot:run
# API: http://localhost:8080/api/users
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# UI: http://localhost:5173
```

## 🔗 Endpoints REST
- `GET /api/users` — lista todos
- `GET /api/users/{id}` — busca por id
- `POST /api/users` — cria (id=null no payload)
- `PUT /api/users/{id}` — atualiza name/email
- `DELETE /api/users/{id}` — remove

## 🧪 Testes
- Backend: `./mvnw test`
- Frontend: ajuste conforme seu setup (ex.: `npm test` se configurado)

## 🐞 Dicas de solução de problemas
- **Driver não encontrado / datasource**: confirme `SPRING_DATASOURCE_URL/USERNAME/PASSWORD` e que o MySQL/MariaDB está rodando.
- **Dialeto**: usar `org.hibernate.dialect.MySQLDialect` com Hibernate 7.
- **CORS**: já liberado para `http://localhost:5173` em `WebConfig`.

## 🤝 Contribuição
1. Crie uma branch (`git checkout -b feature/minha-feature`)
2. Faça commits claros
3. Abra um PR descrevendo mudanças e testes

## 📄 Licença
Defina a licença do projeto aqui (ex.: MIT).
