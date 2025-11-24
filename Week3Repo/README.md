# Next.js Dashboard UI

A small, modular **Next.js dashboard UI** built with **React** and **Tailwind CSS**.

This README provides:

✅ Full project structure
✅ Details of every component
✅ Usage references

---

## 📁 Project Structure

```
.
├── .next/
├── app/
│   ├── about/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── dashboard/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── profile/
│   │   │   └── page.jsx
│   │   └── users/
│   │       └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Graphs/
│   │   ├── Area-chart.jsx
│   │   └── Bar-graph.jsx
│   └── Landing/
│       ├── Featuregrid.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       └── Testimonial.jsx
├── ui/
│   ├── aurora-text.tsx
│   ├── Badge.jsx
│   ├── border-beam.tsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Datatable.jsx
│   ├── Graph.jsx
│   ├── Input.jsx
│   ├── Login.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── particles.tsx
│   ├── retro-grid.tsx
│   ├── Sidebar.jsx
│   ├── smooth-cursor.tsx
│   ├── text-animate.tsx
│   ├── Userlist.jsx
│   └── Userprofile.jsx
├── lib/
└── README.md
```

---

## 🧩 Component Reference

### Core Layout & Pages

* **RootLayout**
  Top-level layout that composes sidebar + navbar and renders page content via children. Manages sidebar visibility state.
  Usage: `app/layout.jsx`

* **Landing Page**
  Minimal static landing content used as root route.
  Usage: `/`

* **About Page**
  Static informational page.
  Usage: `/about`

* **Dashboard Page**
  Composes Cards, Graphs, Datatable to form dashboard UI. Demonstrates layout and component usage.
  Usage: `/dashboard`

* **Dashboard Profile Page**
  Simple user profile placeholder inside dashboard.
  Usage: `/dashboard/profile`

---

### UI Components (`/ui`)

* **Navbar**
  Top bar containing search input and sidebar toggle. Receives `toggleSidebar` callback.
  Usage: `RootLayout`

* **Sidebar**
  Vertical navigation using `Link`. Stateless visual component.
  Usage: `RootLayout` when sidebar is visible.

* **Input (Search)**
  Reusable search input with icon and button.
  Usage: `Navbar`, `Datatable`

* **Button**
  Reusable styled button component for actions and CTAs.
  Usage: Throughout UI.

* **Card (Stat Card)**
  Compact statistic card with CTA. Accepts `CardName`, `BgColor1`, `BgColor2` props.
  Usage: Dashboard, Modal.

* **Graph Wrapper (`Graph.jsx`)**
  Container component for charts. Accepts `title`, `icon`, `typeofgraph`.
  Usage: Dashboard, Modal.

* **Datatable**
  Presentational table scaffold with search and controls.
  Usage: Dashboard, Modal.

* **Modal**
  Overlay panel demonstrating embedding Cards, Graphs, Datatable. Controlled visibility via props.
  Usage: Dashboard demo.

* **Login**
  Login UI layout with input fields and button styling.
  Usage: Authentication UI.

* **Userlist**
  Component displaying list of users.
  Usage: Dashboard user section.

* **Userprofile**
  UI for displaying user profile info.
  Usage: `/dashboard/profile`

* **Badge**
  Small label-style UI indicator.
  Usage: Cards, lists.

* **border-beam**
  Animated border effect component for visual emphasis.
  Usage: Highlights UI elements.

* **aurora-text**
  Gradient animated text effect.
  Usage: Hero / heading UI.

* **retro-grid**
  Retro style animated grid background.
  Usage: Landing page visual.

* **particles**
  Canvas particle animation background.
  Usage: Landing / hero.

* **smooth-cursor**
  Custom animated cursor effect.
  Usage: Landing interactions.

* **text-animate**
  Animated text reveal effect.
  Usage: Hero and headers.

---

### Graph Components (`/components/Graphs`)

* **Areachart**
  Line/area chart using `react-chartjs-2` + Chart.js. Handles dataset and registration internally.
  Usage: Passed as `typeofgraph` into `Graph` on dashboard.

* **Bargraph**
  Bar chart example using `react-chartjs-2` and Chart.js. Encapsulates dataset and chart options; registers minimal Chart.js pieces. Intended as a presentational graph component.
  Usage: Shown inside `Graph` on the dashboard.

---

### Landing Components (`/components/Landing`)

* **Hero**
  Landing intro UI with heading and visuals.

* **Featuregrid**
  Grid layout displaying feature highlights.

* **Testimonial**
  Simple testimonial section.

* **Footer**
  Footer content section.

---
Screenshots->
  Landing Page
    ![alt text](/screenshots/image-1.png)
    ![alt text](/screenshots/image.png)

  DashBoard
    ![alt text](/screenshots/image-2.png)
    ![alt text](/screenshots/image-6.png)

  Sign in card
    ![alt text](/screenshots/image-3.png)

  Profile page
    ![alt text](/screenshots/image-4.png)

  User List
    ![alt text](/screenshots/image-5.png)

When screen size is small

  ![alt text](/screenshots/image-7.png)
  ![alt text](/screenshots/image-8.png)
  ![alt text](/screenshots/image-9.png)
  ![alt text](/screenshots/image-10.png)
  ![alt text](/screenshots/image-11.png)
  ![alt text](/screenshots/image-12.png)
  