# ⚛️ React Playground – Counter App (useState + useEffect)

🚀 A hands-on React learning project focused on mastering state management, side effects, component lifecycle, and interactive UI development

## 📌 About This Project

This project is part of my **React Playground – Learn by Building** series, where I learn React by building real-world mini applications step by step.

This module focuses on:

- ⚛️ React Hooks (`useState`, `useEffect`)  
- 🔁 Functional state updates  
- 🎯 Event-driven UI  
- 🧩 Component reusability  
- 🔀 Conditional rendering  
- 🔄 Component lifecycle & cleanup

## 🎯 What This Project Demonstrates

- ✅ Real-time UI updates using state  
- ✅ Side-effect handling with `useEffect`  
- ✅ Lifecycle simulation in functional components  
- ✅ Clean component architecture  
- ✅ Controlled UI with business constraints (min/max)

## 🧠 Core Concepts

### ⚛️ useState

```jsx
const [counter, setCounter] = useState(0);
```

#### 🔁 Functional Updates (Important Pattern)

```
setCounter(prev => prev + 1);
```

✔ Prevents stale state issues
✔ Works correctly with React’s batching

####  ⚡ useEffect (Lifecycle & Side Effects)

Run on Mount

```
useEffect(() => {
  console.log('App mounted');
  return () => console.log('App unmounted');
}, []);
```

Run on State Change

```
useEffect(() => {
  console.log('Counter updated:', counter);
  return () => console.log('Cleanup previous:', counter);
}, [counter]);
```

#### 🔀 Conditional Rendering

```
(counter & 1) === 0 ? 'Even' : 'Odd'
```

Handles user interactions
Triggers state updates

## 🏗️ Architecture & Design

### 📂 Folder Structure

```text
src/
|
├── components/
│   ├── Header.jsx
│   ├── Canvas.jsx
│   ├── Button.jsx
│   └── Counter.jsx
├── App.jsx
├── index.css

```

### 🧩 Component Breakdown

🔹 **App**
- Manages state (`counter`, toggle visibility)
- Handles `useEffect` lifecycle logic
- Controls mounting/unmounting

🔹 **Counter**
- Encapsulates counter logic
- Uses `useEffect` for lifecycle tracking
- Handles increment/decrement with constraints

🔹 **Canvas**
- Displays counter value and even/odd status

🔹 **Button**
- Reusable component with props:
  - label
  - onClick
  - isDisabled

## 🔄 Component Lifecycle Understanding

This project demonstrates:

- 🟢 Mount → Component renders  
- 🔁 Update → State change triggers effects  
- 🔴 Unmount → Cleanup functions run  

> ⚠️ Note: In React 18 Strict Mode, effects may run twice in development. This is intentional.

## 🎯 Key Learnings

- ⚛️ How React state works  
- 🔁 Functional updates and batching  
- ⚡ How `useEffect` works with dependencies  
- 🔄 Lifecycle handling (mount, update, unmount)  
- 🧩 Component composition & reusability

## ⚠️ Limitations

- ❌ No data persistence (resets on refresh)
- ❌ Single counter only
- ❌ No global state management

## 🚀 Future Enhancements

- 💾 Persist state using Local Storage  
- 📊 Multiple counters using array + `.map()`  
- 🌍 Context API / Redux  
- ⏱️ Real-world side effects (API calls, timers)  
- 🧠 Convert Todo App into state-driven app

## 🖥️ Preview

<img width="3024" height="1474" alt="Image" src="https://github.com/user-attachments/assets/e0d2d33e-e4fa-453e-999c-5a230a30b62c" />

## 🛠️ Tech Stack
- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🎨 CSS

## 📈 Learning Progression

Static UI → Props → Conditional Rendering → useState → useEffect → 🚀 Next: Dynamic Data + Real APIs

## 🤝 Connect With Me
- 💼 **LinkedIn**: https://www.linkedin.com/in/surajitrana/
- 🧑‍💻 **GitHub**: https://github.com/ranasurajit


#### ⭐ Support

If you found this helpful, consider giving it a ⭐

## 🧩 Final Note
🚀 "Don’t just learn React — build, break, and understand it deeply."
