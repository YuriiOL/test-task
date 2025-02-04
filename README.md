# Task List Application (Vue 3 + TypeScript)

## Topic

Development of a mini "Task List" application with progress saving in local storage and synchronization with an API.

## Description

Create a Vue 3 application that allows users to:

- Add, edit, delete, and mark tasks as completed.
- View a list of tasks with filtering by status (completed/not completed).
- Automatically save data.
- Synchronize data with a REST API.

## Technical Requirements

### 1. TypeScript

- Use `interface` to describe the structure of tasks.
- Implement a generic type for the API request function.

### 2. Vue 3 (Composition API)

- Use `ref()`, `computed()`, `watch()`, `onMounted()`.
- Organize the code into separate components:
  - `TaskList.vue`
  - `TaskItem.vue`
  - `TaskForm.vue`

### 3. Pinia

- Implement centralized state management for the task list using Pinia Store.
- Use actions to handle API.

### 4. Vue Router

- Implement two routes:
  - `/tasks` – Task list page.
  - `/tasks/:id` – Detailed task information page.

### 5. Vite

- Use Vite for fast builds and optimizations.

### 6. HTML & CSS

- Use `flexbox` or `grid` for responsive layout.
- Add basic styles to improve the user experience.

### 7. REST API Integration

- Simulate API requests (e.g., `https://jsonplaceholder.typicode.com/todos`).
- Use `fetch` or `axios` for data retrieval and updates.

## Additional Improvements (if time allows):

- Implement animations when adding/removing tasks.
- Add drag & drop functionality for changing task order.
