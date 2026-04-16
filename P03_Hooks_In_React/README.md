# ⚛️ React Playground – Counter App (useState)

🚀 A hands-on React learning project focused on mastering state management, component architecture, and interactive UI development

## 📌 About This Project

This project is part of my React Playground – Learn by Building series, where I learn React by building real-world mini applications step by step.

This module focuses on:

⚛️ React Hooks (useState)
🔁 Functional state updates
🎯 Event-driven UI
🧩 Component reusability
🔀 Conditional rendering

## 🎥 What This Project Demonstrates

✅ Building interactive UI using React
✅ Managing state with useState
✅ Handling user events (clicks)
✅ Preventing invalid state transitions (min/max constraints)
✅ Writing clean, reusable components

## 🧠 Core Concepts

#### ⚛️ useState (State Management)

```
const [counter, setCounter] = useState(0);
```

- textStores dynamic data
- textTriggers re-render on update

#### 🔁 Functional Updates (Important Pattern)

```
setCounter(prev => prev + 1);
```

✔ Prevents stale state issues
✔ Works correctly with React’s batching

#### 🎯 Event Handling

```
<Button onClick={onIncrement} />
```

Handles user interactions
Triggers state updates

#### 🔀 Conditional Rendering

```
(counter & 1) === 0 ? 'Even' : 'Odd'
```

Dynamically updates UI based on state

#### 🛑 State Constraints (Business Logic)
- Max Value: 10
- Min Value: -10

✔ Prevents invalid state updates
✔ Improves UX

## 🏗️ Architecture & Design

#### 📂 Folder Structure

```
src/
|
├── components/
│   ├── Header.jsx
│   ├── Canvas.jsx
│   └── Button.jsx
├── App.jsx
├── index.css
```

#### 🧩 Component Breakdown

🔹 **App (Container Component)**
- Manages state (useState)
- Contains business logic
- Passes props to children

**🔹 Header**
- Displays application title

**🔹 Canvas**
- Displays:
- Counter value
- Even/Odd status

**🔹 Button**
- Reusable component
- Accepts:
    - label
    - onClick
    - isDisabled

## 🎯 Key Learnings

- ⚛️ How React state works
- 🔁 Why functional updates are important
- 🎯 Event-driven architecture in React
- 🧩 Component composition & reusability
- 🛑 Handling edge cases in UI logic

## ⚠️ Limitations

- ❌ No data persistence (resets on refresh)
- ❌ Single counter only
- ❌ No global state management

## 🚀 Future Enhancements

- 💾 Persist state using Local Storage
- ⚡ Introduce useEffect
- 📊 Support multiple counters
- 🧠 Convert Todo App into state-driven app
- 🌍 Explore Context API / Redux

## 🖥️ Preview

<img width="808" height="720" alt="Image" src="https://github.com/user-attachments/assets/fd68fa9d-a522-4589-8be3-77ea232ca13e" />

## 🛠️ Tech Stack
- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🎨 CSS

## 📈 Learning Progression
Static UI → Props → Conditional Rendering → State (useState) → 🚀 Next: Dynamic Data + useEffect

## 🤝 Connect With Me
- 💼 **LinkedIn**: https://www.linkedin.com/in/surajitrana/
- 🧑‍💻 **GitHub**: https://github.com/ranasurajit


#### ⭐ Support

If you found this helpful, consider giving it a ⭐

## 🧩 Final Note
🚀 "Don’t just learn React — build, break, and understand it deeply."
