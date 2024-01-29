import React from "react";
import ReactDOM from "react-dom/client";
//Charkra UI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// Router-Dom
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
// React-Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
