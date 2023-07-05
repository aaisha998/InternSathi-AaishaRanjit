import "./App.scss";
import { HomePage } from "./components/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>

            <Route path="*" element={"Error"}></Route>
          </Routes>

        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
