import "./i18n";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div style={{ display: "flex", justifyContent: "center", padding: 50 }}>
          Loading language resources...
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>,
);
