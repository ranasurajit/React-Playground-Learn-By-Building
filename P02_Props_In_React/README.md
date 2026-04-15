# ⚛️ React Playground – Todo UI (Component-Based)

This project is part of my **React Playground – Learn by Building** series, where I learn React step by step by building real-world UI components.

---

## 🚀 Project Overview

This is a **props-driven Todo UI built using React components**, focusing on understanding:

- Component structure  
- UI composition  
- Reusability  
- Props for dynamic data rendering  
- Conditional rendering  

> ⚠️ Note: This version introduces **props and conditional rendering**, but does not yet include state or full interactivity.

---

## 🔄 Progress Update

### ✅ Phase 1: Static UI
- Built reusable components (`Header`, `TodoItem`, `AddTodoButton`)
- Rendered hardcoded UI

### 🚀 Phase 2: Props-Based UI (Current)
- Passed dynamic data using props  
- Improved component reusability  
- Implemented conditional rendering for completed todos  
- Correctly used boolean props (`completed={true}`)  

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

### ♻️ Reusability via Props
Components now accept dynamic data via props:

- `title` → Header  
- `label`, `completed` → TodoItem  
- `label` → AddTodoButton  

#### Example:
```jsx
<TodoItem label="Eat" completed={true} />
```

---

### 🎨 Styling in React
- Global CSS via `index.css`  
- Uses `className` instead of `class`  

---

## 🛠️ Implementation Details

### 📂 Folder Structure
```text
src/
|
├── components/
│   ├── Header.jsx
│   ├── TodoItem.jsx
│   └── AddTodoButton.jsx
├── App.jsx
├── index.css
```

---


---

### 🔀 Conditional Rendering
UI changes based on props:

```jsx
{props.completed ? <span>✅</span> : <input type="checkbox" />}
```

---

## 📌 Components Overview

### Header
Displays the title of the app using props.

### TodoItem
Represents a single todo item with:
- Label (via props)  
- Completed state (via props)  
- Conditional UI rendering  

### AddTodoButton
Button UI with dynamic label via props.

### App
Root component that composes all UI elements and passes props.

---

## 🎯 Key Learnings

- Think in **components, not pages**  
- Build **reusable UI blocks**  
- Use **props to pass dynamic data**  
- Apply **conditional rendering for UI changes**  
- Understand correct usage of **boolean props in React** 

---

## ⚠️ Current Limitations

- No state management  
- No dynamic list rendering  
- No event handling  
- Todos are still manually defined  

---

## 🚀 Next Steps

- Add `useState` for dynamic todos  
- Render todos using `.map()`  
- Implement Add Todo functionality  
- Add delete functionality  
- Manage checkbox state

---

## 💡 Future Enhancements

- Local storage persistence  
- Edit todo feature  
- Filters (Completed / Pending)  
- UI improvements  

---

## 🧩 Final Note

> 🚀 Learn. Build. Break. Fix. Repeat.
