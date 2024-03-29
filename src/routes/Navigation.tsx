import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src="./vite.svg" alt="React Logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="users" element={<h1>Users page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
);
