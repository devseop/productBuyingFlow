import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import { Router } from "./router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./rtk/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
