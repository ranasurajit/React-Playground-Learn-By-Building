# 🎮 Tic-Tac-Toe Game (React)

A clean and interactive Tic-Tac-Toe game built using **React**, focusing on strong fundamentals like **state management, component design, and derived state patterns**.

---

## 🚀 Live Demo
> (Add your deployed link here if available)

---

## 📌 Features

- 🎯 Two-player gameplay (X vs O)
- 🧠 Smart winner detection logic
- 🤝 Draw detection
- 🔄 Game reset functionality
- ⚡ Instant UI updates using React state
- 🧩 Modular component architecture
- 🎨 Dynamic cell styling based on player moves

---

## 🏗️ Project Structure

```
App
 └── Board
       └── Cell
```

### Component Responsibilities

- **App**
  - Manages global board state
  - Passes data and handlers to Board

- **Board**
  - Handles game logic (turns, winner, draw)
  - Renders grid layout
  - Controls game flow

- **Cell**
  - Stateless UI component
  - Displays individual cell value
  - Handles click interaction

---

## 🧠 Key Concepts Implemented

### 1. Derived State (Important 🔥)

Instead of storing `winner` in state, it is computed from `boardState`:

```js
const winner = computeWinner(boardState);
```

👉 Ensures:
- No stale state
- No synchronization bugs
- Cleaner logic

---

### 2. Immutable State Updates

```js
const copiedBoardState = [...boardState];
```

👉 Prevents:
- Unexpected mutations
- React rendering issues

---

### 3. Declarative Rendering

```js
board.every(cell => cell !== null)
```

👉 Used for:
- Draw detection
- Cleaner and more readable logic

---

### 4. Component Reusability

- `Cell` is a reusable UI component
- Controlled via props (`value`, `onClick`)

---

## ⚙️ Core Logic

### Winner Detection

```js
const computeWinner = (board) => {
    for (const cell of winnerCells) {
        if (
            board[cell[0]] &&
            board[cell[0]] === board[cell[1]] &&
            board[cell[0]] === board[cell[2]]
        ) {
            return board[cell[0]];
        }
    }
    return null;
};
```

---

### Draw Detection

```js
const isMatchDrawn = winner === null && board.every(cell => cell !== null);
```

---

## 🎮 Game Rules

- Player **X** starts first
- Players alternate turns
- First to align 3 symbols (row, column, diagonal) wins
- If all cells are filled and no winner → Draw

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components + Hooks)
- 🎨 CSS (Custom Styling)

---

## 📸 Screenshots

<img width="1792" height="1110" alt="Image" src="https://github.com/user-attachments/assets/f058b2b8-1a9b-4534-9ca9-ba94947ea868" />

---

## 🚧 Future Enhancements

- 🟨 Highlight winning cells
- ⏳ Move history (time-travel feature)
- 🤖 AI opponent (minimax algorithm)
- 📱 Responsive design improvements
- 🌐 Deploy on Vercel / Netlify

---

## 📚 Learnings & Takeaways

- Understanding **derived state vs stored state**
- Importance of **immutability in React**
- Writing **clean, scalable component structures**
- Avoiding common pitfalls like:
  - State duplication
  - Direct mutation
  - UI-only logic enforcement

---

## 🧑‍💻 Author

**Surajit Rana**

- GitHub: https://github.com/ranasurajit
- LinkedIn: https://www.linkedin.com/in/surajitrana

---

## ⭐ If you like this project

Give it a ⭐ and feel free to fork & improve!
