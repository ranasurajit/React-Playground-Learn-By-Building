# 📝 Todo Dashboard (React + Redux Toolkit)

A modern, responsive Todo Dashboard built using **React**, **Redux
Toolkit**, and **Tailwind CSS**.\
This project demonstrates scalable state management, async API handling,
and clean UI/UX practices.

------------------------------------------------------------------------

## 🚀 Features

-   ✅ Fetch todos from API (Async Thunk)
-   ✅ Global state management using Redux Toolkit
-   ✅ Loading, Error, and Empty states handling
-   ✅ Retry mechanism for failed API calls
-   ✅ Responsive and modern UI with Tailwind CSS
-   ✅ Optimized selectors to prevent unnecessary re-renders
-   ✅ StrictMode-safe API fetching

------------------------------------------------------------------------

## 🧠 Tech Stack

-   React (Vite)
-   Redux Toolkit
-   React Redux
-   Tailwind CSS

------------------------------------------------------------------------

## 📁 Project Structure

    src/
    │
    ├── components/
    │   └── (UI components if added)
    │
    ├── redux/
    │   ├── store.js
    │   └── slices/
    │       └── todoSlice.js
    │
    ├── App.jsx
    ├── main.jsx
    ├── index.css

------------------------------------------------------------------------

## ⚙️ Installation & Setup

1.  Clone the repository:

```bash
    git clone <your-repo-url>
    cd <your-project-folder>
```

2.  Install dependencies:

```bash
    npm install
```
3.  Run the development server:

```bash
    npm run dev
```

------------------------------------------------------------------------

## 🔄 API Used

-   https://dummyjson.com/todos

------------------------------------------------------------------------

## 🧩 Redux Architecture

-   **Slice Name:** `todos`
-   **State Shape:**

```bash
    {
      todos: {
        isLoading: boolean,
        data: object | null,
        hasError: boolean
      }
    }
```

-   **Async Thunk:** `fetchTodos`

------------------------------------------------------------------------

## 💡 Key Learnings

-   Handling async operations with `createAsyncThunk`
-   Structuring scalable Redux stores
-   Avoiding unnecessary re-renders with optimized selectors
-   Managing UI states (loading, error, empty)
-   Improving UX with retry patterns and conditional rendering

------------------------------------------------------------------------

## 🚀 Future Enhancements

-   Toggle todo (complete/incomplete)
-   Filter (All / Completed / Pending)
-   Search functionality
-   Add / Delete todos
-   Persist state (localStorage)

------------------------------------------------------------------------

## 📸 Preview

> Clean, minimal dashboard with modern UI and smooth UX.

------------------------------------------------------------------------

## 🏁 Conclusion

This project demonstrates real-world usage of Redux Toolkit with a focus
on scalability, performance, and user experience.

------------------------------------------------------------------------

## 🙌 Author

Built as part of a learning journey toward mastering React & Redux.
