// ...existing code...
# Launchpad Week 3 — Components Overview

This project is a small Next.js dashboard UI built with React and Tailwind CSS. Below is a concise reference for each UI component, graph, layout, and page so you can quickly find and reuse them.

## Core layout & pages
-RootLayout  
  Top-level client layout that composes the app chrome (sidebar + navbar) and renders page content via children. Manages UI state such as whether the sidebar is visible.  
  Usage: Wraps all pages; used automatically by Next.js at [app/layout.jsx](app/layout.jsx).

- Pages:
  -Landing page component  
    Minimal static landing content used as the site's root route.  
    Usage: Rendered at `/`.

  -About page component  
    Static informational page for project/about content.  
    Usage: Rendered at `/about`.

  -Dashboard page component  
    Page that composes Cards, Graphs and Datatable to demonstrate dashboard UI. Acts as an example container showing component composition and responsive layout.  
    Usage: Rendered at `/dashboard`.

  -Dashboard Profile page  
        Simple user profile placeholder under dashboard section.  
        Usage: Rendered at `/dashboard/profile`.

## UI components (components/ui)
-Navbar  
    Top app bar that exposes a compact search (`Input`) and the hamburger toggle for the sidebar. Receives a `toggleSidebar` callback prop to flip sidebar state. Keeps the header visually consistent and handles header-level controls.  
    Usage: Used inside [`RootLayout`](app/layout.jsx) as the page header.

-Sidebar  
    Vertical navigation component that groups navigation links (Core, Interface, Addons). Stateless visual component — uses Next's `Link` for client navigation. Responsible for primary site navigation and consistent item styling.  
    Usage: Rendered by [`RootLayout`](app/layout.jsx) when `sidebarOpen` is true.

-Input (Search)  
    Small, reusable search input with a button and icon. Encapsulates markup + styles for search controls so other components (Navbar, Datatable) can reuse the same UI. Stateless; can be extended to accept value/handlers.  
    Usage: Present in [`Navbar`](components/ui/Navbar.jsx) and [`Datatable`](components/ui/Datatable.jsx).

-Card (Stat Card)  
    Compact statistic / CTA card with two-row layout: header area and footer button. Receives `CardName`, `BgColor1`, `BgColor2` props to control title and background color variants. Focuses on presentational concerns and simple CTA behavior.  
    Usage: Used in [`app/dashboard/page.jsx`](app/dashboard/page.jsx) and [`components/ui/Modal.jsx`](components/ui/Modal.jsx) for dashboard stat rows.

-Graph wrapper  
    Generic container for chart visuals. Accepts `title`, `icon` (component), and `typeofgraph` (a rendered chart element). Provides consistent framing (title bar, border, fixed height) and places the chart inside a responsive area. Keeps chart integration concerns out of pages.  
    Usage: Wraps chart components like [`Areachart`](components/Graphs/Area-chart.jsx) and [`Bargraph`](components/Graphs/Bar-graph.jsx) in [`app/dashboard/page.jsx`](app/dashboard/page.jsx) and [`components/ui/Modal.jsx`](components/ui/Modal.jsx).

-Datatable (UI scaffold)  
    Presentational table scaffold with header, page-size control and integrated search (`Input`). Designed to show table controls and layout; does not include data fetching or row rendering logic. Useful as a starting point for wiring actual data.  
    Usage: Displayed on the dashboard and inside the modal demo [`components/ui/Modal.jsx`](components/ui/Modal.jsx).

## Graph components (components/Graphs)
-Areachart (Line/Area chart)  
    Chart component built with `react-chartjs-2` and Chart.js that renders a line chart with area fill. Registers required Chart.js components and supplies a simple timeseries dataset and options. Keeps chart configuration local so pages only need to place the component.  
    Usage: Passed as `typeofgraph` into [`Graph`](components/ui/Graph.jsx) on the dashboard.

  -Bargraph  
    Bar chart example using `react-chartjs-2` and Chart.js. Encapsulates dataset and chart options; registers minimal Chart.js pieces. Intended as a presentational graph component.  
    Usage: Shown inside [`Graph`](components/ui/Graph.jsx) on the dashboard.