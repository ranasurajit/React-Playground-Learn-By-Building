# ⚛️ React Playground – Todo UI (Component-Based)

This project is part of my **React Playground – Learn by Building** series, where I learn React step by step by building real-world UI components.

---

## 🚀 Project Overview

This is a **basic Todo UI built using React components**, focusing on understanding:

- Component structure  
- UI composition  
- Reusability  
- Clean separation of concerns  

> ⚠️ Note: This is a **static version** (no state or interactivity yet). The goal is to first master component design.

---

## 🧠 Concepts Covered

### 🧩 Component-Based Architecture
The UI is broken down into reusable components:
- Header  
- TodoItem  
- AddTodoButton  

---

### 🔗 Component Composition
Components are combined inside `App.jsx`:

- Header  
- Multiple TodoItem instances  
- AddTodoButton  

---

### ♻️ Reusability
- `TodoItem` component is reused multiple times  
- Demonstrates DRY (Don't Repeat Yourself) principle  

---

### 🎨 Styling in React
- Global CSS via `index.css`  
- Uses `className` instead of `class`  

---

## 🛠️ Implementation Details

### 📂 Folder Structure
```text
src/
├── components/
│   ├── Header.jsx
│   ├── TodoItem.jsx
│   └── AddTodoButton.jsx
├── App.jsx
├── index.css
```

---

## 📌 Components Overview

### Header
Displays the title of the app.

### TodoItem
Represents a single todo item with a checkbox and label.

### AddTodoButton
Button UI for adding todos (functionality will be added later).

### App
Root component that composes all UI elements together.

---

## 🎯 Key Learnings

- Think in **components, not pages**  
- Build **reusable UI blocks**  
- Separate **structure (JSX)** and **styling (CSS)**  
- Start with **static UI before adding logic**  

---

## ⚠️ Current Limitations

- No state management  
- No dynamic data  
- No event handling  
- Todos are hardcoded  

---

## 🚀 Next Steps

- Add `useState` for dynamic todos  
- Implement "Add Todo" functionality  
- Add delete functionality  
- Use props for data passing  
- Render todos dynamically using `.map()`  

---

## 💡 Future Enhancements

- Local storage persistence  
- Edit todo feature  
- Filters (Completed / Pending)  
- UI improvements  

---

## 🧩 Final Note

> 🚀 Learn. Build. Break. Fix. Repeat.
