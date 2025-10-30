# 🪙 Digital Wallet System — Frontend

## 💻 Overview

This is the **frontend** of a full-stack **Digital Wallet System** inspired by **bKash / Nagad**, built with **React + TypeScript + ShadCN + HyperUI + Redux Toolkit + Bun**.  
It provides a smooth, responsive UI for multiple roles — **Super Admin, Admin, Agent, and User** — to perform wallet operations such as sending money, managing transactions, and approving agents.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | TypeScript |
| UI | [ShadCN UI](https://ui.shadcn.com/) + [HyperUI](https://www.hyperui.dev/) |
| State Management | Redux Toolkit + RTK Query |
| Routing | React Router DOM v6 |
| Auth | JWT-based via Backend API |
| Package Manager | [Bun](https://bun.sh/) |
| Styling | Tailwind CSS |

---

## 📂 Project Structure

src/
├── App.tsx
├── main.tsx
├── index.css
│
├── assets/
│ ├── icons/
│ ├── images/
│ └── react.svg
│
├── components/
│ ├── layout/
│ ├── modules/
│ ├── ui/
│ ├── app-sidebar.tsx
│ └── ...
│
├── context/
│ └── theme.context.ts
│
├── hooks/
│ ├── useTheme.ts
│ └── use-mobile.ts
│
├── lib/
│ ├── axios.ts
│ └── utils.ts
│
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── Unauthorized.tsx
│ ├── GetTransHistory.tsx
│ ├── Admin/
│ ├── Agent/
│ └── User/
│
├── providers/
│ └── theme.provider.tsx
│
├── redux/
│ ├── baseApi.ts
│ ├── features/
│ ├── hook.ts
│ └── store.ts
│
├── routes/
│ ├── index.tsx
│ ├── adminRoets.ts
│ ├── agentSideBar.tsx
│ └── usersSidebarItems.ts

│
├── constants/
│ └── role.ts
│
├── types/
│ └── index.ts
│
└── utils/
├── withAuth.tsx
├── generateRoutes.ts
├── getSidebarItems.ts
└── ...

---

## 🚦 Routing Setup

All routes are defined in `src/routes/index.tsx` and are **role-protected** using the `withAuth()` higher-order component.

### 🏠 Public Routes

| Path | Component | Description |
|------|------------|-------------|
| `/` | `Home` | Landing page |
| `/about` | `About` | About page |
| `/login` | `Login` | Login page |
| `/register` | `Register` | Registration page |
| `/unAuthorized` | `Unauthorized` | Unauthorized access |
| `/transaction` | `GetTransHistory` | View personal transaction history |
| `/success`, `/fail`, `/cancel` | Payment result pages |

---

### 🧑‍💼 Super Admin / Admin Routes

`/admin/...` routes are accessible only to **SUPER_ADMIN** or **ADMIN** roles.

| Title | Path | Component |
|--------|------|-----------|
| All Users Data | `/admin/getallUsers` | `GetAllUsers` |
| All Transactions List | `/admin/getAllTransaction` | `GetAllTransactions` |

---

### 🧑 Agent Routes

Accessible to users with the **AGENT** role.

| Title | Path | Component |
|--------|------|-----------|
| Cash In | `/agent/cashIn` | `CashIn` |
| Request for Agent Money | `/agent/request-for-agent-money` | `RequestAgentMoney` |

---

### 👤 User Routes

Accessible to users with the **USER** role.

| Title | Path | Component |
|--------|------|-----------|
| Send Money | `/user/send-money` | `SendMoney` |
| Request for Agent | `/user/request-for-agent` | `RequestForAgent` |
| Cash Out | `/user/cash-out` | `CashOut` |

---

## 🔐 Authentication

- Login and Register pages communicate with the backend API via RTK Query.  
- Upon login, a **JWT token** is stored securely and attached to all future requests.  
- Routes are protected using the `withAuth()` HOC, ensuring users can only access their authorized pages.

---

## 🧰 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Istiaque-Mahbub/Digital_Wallet_Managnment_Client
cd digital-wallet-frontend

bun install
VITE_API_URL=http://localhost:5000/api/v1
bun run dev
---
| Command           | Description                  |
| ----------------- | ---------------------------- |
| `bun run dev`     | Start the development server |
| `bun run build`   | Build the app for production |
| `bun run preview` | Preview the production build |
| `bun run lint`    | Run linting checks           |
```

---

### 🌗 Theming

Dark/Light theme switching is managed via a React Context (theme.context.ts) and persisted in local storage.
All components from ShadCN UI and HyperUI support Tailwind’s dark mode out of the box.

---

### State Management

redux/store.ts configures the global store.

baseApi.ts defines a base RTK Query API layer using Axios.

Each feature (e.g., authApi, userApi, transactionApi) extends this base for modular endpoints.

---
### Live Link: https://digital-wallet-front-end-gamma.vercel.app
### Backend Repo-https://github.com/Istiaque-Mahbub/Digital_Wallet_Managnment


