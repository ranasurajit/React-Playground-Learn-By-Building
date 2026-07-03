# 📚 Course Tracker

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-orange)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

A lightweight **Course Tracker** application built with **React** and **Zustand** to explore modern state management, React Hooks, controlled components, and real-world debugging scenarios.

The primary objective of this project was not just to implement CRUD functionality, but to gain a deeper understanding of how React renders components, how external state management libraries work, and how to debug common runtime issues.

---

## ✨ Features

* ➕ Add new courses
* ✅ Mark courses as completed
* 🗑️ Delete courses
* 🎨 Visual indication for completed courses
* 🌐 Global state management using Zustand
* 🛠️ Integrated Zustand DevTools for debugging

---

# 📸 Screenshots

## Home Page

<img width="828" height="720" alt="Image" src="https://github.com/user-attachments/assets/0300cced-adef-441b-8c67-f27274f55780" />

```text
assets/home-page.png
```

<p align="center">
<img src="assets/home-page.png" width="900"/>
</p>

---

## Adding a Course

```text
assets/add-course.gif
```

<p align="center">
<img src="assets/add-course.gif" width="900"/>
</p>

---

## Toggling Completion

```text
assets/toggle-course.gif
```

<p align="center">
<img src="assets/toggle-course.gif" width="900"/>
</p>

---

## Deleting a Course

```text
assets/delete-course.gif
```

<p align="center">
<img src="assets/delete-course.gif" width="900"/>
</p>

---

# 🏗️ Tech Stack

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| React             | UI Development               |
| Zustand           | Global State Management      |
| JavaScript (ES6+) | Programming Language         |
| Vite              | Development Server & Bundler |

---

# 📂 Project Structure

```text
course-tracker/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── CourseForm.jsx
│   │   └── CourseList.jsx
│   │
│   ├── stores/
│   │   └── courseStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/<your-username>/course-tracker.git
```

## Navigate to the Project

```bash
cd course-tracker
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🚀 Application Flow

```text
User Action
     │
     ▼
React Component
     │
     ▼
Zustand Store Action
     │
     ▼
Global State Updated
     │
     ▼
Subscribed Components Re-render
```

---

# 🧠 Key Learning Outcomes

## React Fundamentals

* Functional Components
* JSX
* Event Handling
* Conditional Rendering
* Lists and Keys
* Component Composition

---

## React Hooks

* `useState()`
* State-driven rendering
* Local component state

---

## Zustand

Learned how to

* Create a global store
* Subscribe to state
* Update state immutably
* Separate business logic from UI
* Share state across components

Example:

```javascript
const useCourseStore = create((set) => ({
    courses: [],
    addCourse: () => {},
    removeCourse: () => {},
    toggleCourseStatus: () => {}
}));
```

---

## Immutable State Updates

Implemented immutable operations using

* Spread Operator
* Array `map()`
* Array `filter()`

Examples:

```javascript
courses: [...state.courses, course]
```

```javascript
courses: state.courses.filter(...)
```

```javascript
courses: state.courses.map(...)
```

---

## Controlled Components

Every input in the application is controlled by React.

```jsx
<input
    value={courseTitle}
    onChange={(e) => setCourseTitle(e.target.value)}
/>
```

Checkbox state is also controlled.

```jsx
<input
    type="checkbox"
    checked={course.completed}
    onChange={() => toggleCourseStatus(course.id)}
/>
```

---

# 🐞 Debugging Journey

This project involved solving several real-world React issues.

## Infinite Render Loop

### Error

```text
Maximum update depth exceeded
```

### Root Cause

Returning a new object from the Zustand selector on every render.

### Solution

Subscribe only to individual state slices.

```javascript
const courses = useCourseStore(
    (state) => state.courses
);
```

---

## React Snapshot Warning

### Error

```text
The result of getSnapshot should be cached
```

### Cause

Creating a new selector object every render.

### Solution

Avoid object selectors unless using shallow comparison.

---

## Controlled vs Uncontrolled Inputs

### Error

```text
A component is changing an uncontrolled input to be controlled
```

### Root Cause

Newly added courses did not include

```javascript
completed
```

Resulting in

```jsx
checked={undefined}
```

### Fix

Initialize every course with

```javascript
completed: false
```

---

# 💡 Best Practices Learned

* Keep global business logic inside the Zustand store
* Avoid mutating state directly
* Prefer immutable updates
* Use controlled inputs
* Subscribe only to required state
* Build reusable components
* Debug React warnings instead of suppressing them

---

# 🚀 Future Enhancements

* 💾 Persist state using Zustand Persist Middleware
* ✏️ Edit existing courses
* 🔍 Search functionality
* 🏷️ Course categories
* 📅 Due dates
* 📊 Progress dashboard
* 🌙 Dark mode
* 📱 Responsive layout
* 🔄 Drag-and-drop course ordering

---

# 📖 What This Project Taught Me

Although the application is intentionally simple, it provided valuable hands-on experience with concepts that appear frequently in production React applications.

Beyond implementing features, I learned how to reason about:

* React's rendering lifecycle
* State subscriptions
* Immutable updates
* Global state management
* Controlled components
* Component architecture
* Performance considerations
* Debugging runtime errors

This project strengthened both my React fundamentals and my confidence in diagnosing and resolving real-world frontend issues.

---

# 👨‍💻 Author

**Surajit Rana**

* GitHub: https://github.com/ranasurajit
* LinkedIn: https://www.linkedin.com/in/surajitrana

---

<p align="center">

⭐ If you found this project helpful or interesting, consider giving it a star!

</p>
