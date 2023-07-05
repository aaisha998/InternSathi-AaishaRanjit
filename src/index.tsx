import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

declare global {
  interface Window {
    ReactQueryClientContext?: React.Context<QueryClient | undefined>;
  }
}
export declare const useQueryClient: () => QueryClient;
export interface QueryClientProviderProps {
  client: QueryClient;
  contextSharing?: boolean;
  children?: React.ReactNode;
}
export declare const QueryClientProvider: ({
  client,
  contextSharing,
  children,
}: QueryClientProviderProps) => JSX.Element;
