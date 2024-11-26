# Todo Application

A feature-rich Todo Application built with **React**, **Redux**, and **Tailwind CSS**, powered by **FreeAPI** backend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [API Details](#api-details)
- [License](#license)

---

## Features

- **Add Task:** Create new tasks with a title and description.
- **View Tasks:** Display a list of all tasks with timestamps.
- **Update Task:** Modify existing tasks.
- **Delete Task:** Remove tasks permanently.
- **Mark as Done:** Mark tasks as completed with a line-through effect.

---

## Tech Stack

- **Frontend:**

  - React (with Hooks)
  - Redux Toolkit
  - Tailwind CSS
  - React Router

- **Backend API:**
  - FreeAPI
  - Axios for HTTP requests

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/panderonak/cloudTasks.git
   cd cloudTasks

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Set up the backend API:
   - Ensure your FreeAPI instance is running and accessible.
   - Update the URL in todoService.js to point to your backend API endpoint.
4. Start the development server:

   ```bash
   npm run dev

   ```

---

## Folder Structure

- Below is the folder structure of the project, organized for scalability and maintainability:

```
src/
├── components/
│   ├── Button/
│   │   └── Button.jsx
│   ├── Container/
│   │   └── Container.jsx
|   ├── CreateTask/
│   │   └── CreateTask.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── Input/
│   │   └── Input.jsx
│   └── TaskCard/
│   |   └── TaskCard.jsx
│   └── UpdateTask/
│   |   └── UpdateTask.jsx
|   └── index.js
|
├── features/
│   └── taskSlice.js
|
├── freeAPI/
│   └── todoService.js
|
├── store/
│   └── store.js
|
└── App.jsx
```

---

# API Details

**Base URL:** `/api/v1/todos`

## Endpoints

### 1. Create Task

- **Method:** `POST`
- **Endpoint:** `/`
- **Payload:**
  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```

### 2. Get All Tasks

- **Method:** `GET`
- **Endpoint:** `/`
- **Params:**
  - complete (optional): boolean – Filter tasks based on completion status.

### 3. Get Task by ID

- **Method:** `GET`
- **Endpoint:** /:id

### 4. Update Task

- **Method:** `PATCH`
- **Endpoint:** /:id
- **Payload:**

  ```json
  {
    title: string,
    description: string
  }

  ```

### 5. Delete Task

- **Method:** `DELETE`
- **Endpoint:** /:id

### 6. Mark Task as Done

- **Method:** `PATCH`
- **Endpoint:** /toggle/status/:id

---

## License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute this application.
