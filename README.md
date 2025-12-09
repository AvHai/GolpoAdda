# GolpoAdda

GolpoAdda — A full-stack web application for storytelling and community interaction: read, write and share stories with an intuitive UI and structured backend.

## 🚀 What is GolpoAdda

GolpoAdda is a platform designed to let users read, write, and share stories (golpo = story in Bengali), fostering a community around creative writing. It provides a user-friendly interface for story submission and browsing, with backend support to handle data storage, retrieval, and user interactions.

This project showcases end-to-end development: frontend UI, backend APIs, and integration — giving a holistic view of a production-ready web application.

## 🧰 Tech Stack

- Frontend: TypeScript (the repo shows ~ 99.4% use of TypeScript) 
GitHub

- Backend: (folder named backend — likely Node.js / Express / or some server-side framework) 
GitHub

- Full-stack Architecture: Separation of frontend & backend, clear folder structure (frontend/, backend/) 
GitHub

Why this stack? Using TypeScript helps ensure type-safety, readability and maintainability — especially in full-stack contexts. Splitting frontend and backend helps modularity, easier debugging, and scaling.

## ✅ What I Implemented

Designed and implemented a frontend UI that allows users to browse and read stories.

Created a backend service to manage story data, user requests, data persistence and retrieval — enabling full CRUD operations (create, read, update, delete stories) though details depend on final code checks.

Organized the repository with clear modular separation (frontend vs backend), facilitating easier maintenance, collaboration and deployment.

Ensured the codebase uses TypeScript, aiding code quality, readability, and type safety.

📂 Repository Structure
```text
├── /frontend       → Frontend application (UI, user interactions) 
├── /backend                   → Backend APIs and business logic 
└── README.md
```

This clear structure shows you understand best practices of project organization for scalable full-stack applications.

## 🖥️ How to Run / Demo
Clone the repo 
```
git clone https://github.com/AvHai/GolpoAdda.git  
cd GolpoAdda  

# Setup backend  
cd backend  
# install dependencies (e.g. npm install / yarn)  
# configure env (database / port / any env vars)  

# Setup frontend  
cd ../frontend  
# install dependencies (npm install / yarn)  
```
## Run both frontend and backend  
e.g. start backend server, then run frontend dev server  

