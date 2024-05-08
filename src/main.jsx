import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; //am importat BrowserRouter si i-am schimbat denumirea in fiserul asta
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
