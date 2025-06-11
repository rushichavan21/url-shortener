import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { routeTree } from "./routing/rootTree.js";
import { AuthContextProvider } from "./context/authContext.jsx";
const queryClient = new QueryClient();
const router = createRouter({ routeTree });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
);
