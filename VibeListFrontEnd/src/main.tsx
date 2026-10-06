import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";

import "./index.css";
import App from "./App.tsx";

const primereact = {
  theme: {
    preset: Aura,
  },
  license: import.meta.env.VITE_PRIMEUI_LICENSE,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);