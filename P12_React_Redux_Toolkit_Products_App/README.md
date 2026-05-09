# 🛍️ React Redux ShopperStop

A modern **E-commerce Cart Application** built using **React, Redux Toolkit, Tailwind CSS, and React Router**.

This project demonstrates real-world state management, cart functionality, and responsive UI design.

---

## 🚀 Features

- 🛒 Add to Cart functionality
- 🔁 Quantity management (auto increment on duplicate add)
- 📊 Dynamic cart badge (total items)
- 💰 Total price calculation
- 📦 Product listing from API
- 🌐 Routing (Home & Cart pages)
- 🎨 Responsive UI with Tailwind CSS

---

## 🧠 Tech Stack

- ⚛️ React (Vite)
- 🧩 Redux Toolkit
- 🎨 Tailwind CSS
- 🔀 React Router DOM
- 🌐 FakeStore API

---

## 📂 Project Structure

```
react-redux-shopperstop/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Card.jsx
│ │ ├── Cart.jsx
│ │
│ ├── redux/
│ │ ├── store.js
│ │ └── slices/
│ │ └── cartSlice.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│
├── package.json
├── vite.config.js
└── README.md
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/react-redux-shopperstop.git
cd react-redux-shopperstop
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```

---

## 🌐 API Used

https://fakestoreapi.com/products

---

## 📸 Screenshots

<img width="1280" height="595" alt="Image" src="https://github.com/user-attachments/assets/281b2f51-60c5-4f06-824d-c8534974695e" />

---

## 🛠️ Core Concepts Implemented

- Redux global state management
- Slice-based architecture
- Immutable updates using Immer
- Derived state (cart totals)
- Component reusability
- Responsive grid layouts

---

## 🔥 Future Enhancements

- ➕ Increase / Decrease quantity buttons
- ❌ Remove item from cart
- 💾 Persist cart using localStorage
- 🔐 Authentication (Login / Signup)
- 💳 Checkout flow
- ⭐ Product filtering & sorting

---

## 👨‍💻 Author

**Surajit Rana**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

## 💡 Pro Tip (Important)
Right now your structure is **good**, but for interviews:

👉 Separate:
- `components/` → reusable UI  
- `pages/` → route-based screens  

This shows **senior-level thinking**.

---

## 🚀 Want Next Upgrade?
I can help you turn this into:

- 💼 **:contentReference[oaicite:0]{index=0}**
- 🔥 Add **Redux selectors + middleware**
- 🧠 Add **performance optimizations**
- 🌍 Deploy on **Vercel**

Just say: *"Make this production-ready"* 👍
