import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./components/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { queryClient } from "./queryClient";
import { SelectedDataProvider } from "./components/ProductDetailsContext";
import { ProductPage } from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SelectedDataProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
              <Route path="/product-detail" element={<ProductPage />}></Route>

              <Route path="*" element={"Error"}></Route>
            </Routes>
          </QueryClientProvider>
        </SelectedDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
