import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./components/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { queryClient } from "./queryClient";
import { ProductPage } from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/product-detail/:id" element={<ProductPage />}></Route>

          <Route path="*" element={"Error"}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
