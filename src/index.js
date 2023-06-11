import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import CategoryComponent from "./pages/Categories";
import NoPage from "./pages/NoPage";
import data from "./assets/data.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoryComponent/>} />
          {data.map((item) => (
            <Route
              key={item.categoryId}
              path={`/${item.categoryName}`}
              element={<CategoryComponent categoryName={item.categoryName} />}
            />
          ))}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
