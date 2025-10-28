import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
