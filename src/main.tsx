import "./i18n";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

(function (l) {
  if (l.search[1] === "/") {
    var decoded = l.search
      .slice(1)
      .split("&")
      .map(function (s) {
        return s.replace(/~and~/g, "&");
      })
      .join("?");
    window.history.replaceState(
      null,
      "",
      l.pathname.slice(0, -1) + decoded + l.hash,
    );
  }
})(window.location);

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
