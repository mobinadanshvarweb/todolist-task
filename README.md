

---

# 🧩 SavvyTech Frontend Assignment – Todo List App

A simple **Task Management Interface** built with **React + TypeScript + Redux Toolkit + TailwindCSS**, allowing users to **add, edit, and delete** tasks.
This project was developed as part of the **SavvyTech Front-End Developer Technical Assignment**.

---

## 🚀 Features

* 🗂️ View a list of tasks with:

  * Title
  * Description
  * Creation date & time
* ➕ Add new tasks using a modal form
* ✏️ Edit existing tasks in a modal (pre-filled with data)
* ❌ Delete tasks with confirmation modal
* 💾 Data persistence via **Local Storage**

---

## 🧠 Technical Stack

* **React** (Functional Components + Hooks)
* **TypeScript**
* **Redux Toolkit** (State management)
* **TailwindCSS** (Styling)
* **LocalStorage** (Data persistence)

---

## 🧩 Folder Structure

```
src/
├── components/     # Reusable UI components (Modal, Button, etc.)
├── pages/
│   └── tasks/      # Task page + TaskList + TaskCard components
├── redux/          # Redux store + slices (task & modal)
├── types/          # TypeScript type definitions
└── Layout.tsx      # Main app layout
```

---

## 🕒 Date Format

Each task’s creation date is displayed in the format:

```
YYYY-MM-DD HH:MM
```

---

## ⚙️ Setup & Run

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm run dev
```

---

## 💡 Notes

* The project currently uses **localStorage** for storing tasks.
* If preferred, it can be extended to use a **mock or fake API** for data persistence.

---

## 👨‍💻 Author

**Mobina Daneshvar**
📧 [mobinadanshvar@gmail.com](mailto:mobinadanshvar@gmail.com)
🔗 [GitHub Profile](https://github.com/mobinadanshvarweb)

---




