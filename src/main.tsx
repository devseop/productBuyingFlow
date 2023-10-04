import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import { Router } from "./router/router.tsx";
import { AppLayout } from "./components/AppLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppLayout>
    <Router />
  </AppLayout>,
);
