
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, HashRouter } from "react-router";
  import App from "./app/App.jsx";
  import "./styles/index.css";

  // The single-file build (see vite.config.singlefile.js) is opened directly
  // from disk via file://, where BrowserRouter's pushState is not usable —
  // HashRouter keeps navigation working with no server involved.
  const Router = import.meta.env.VITE_SINGLEFILE ? HashRouter : BrowserRouter;

  createRoot(document.getElementById("root")).render(
    <Router>
      <App />
    </Router>,
  );
