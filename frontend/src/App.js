import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import RebirthPage from "@/pages/RebirthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rebirth" element={<RebirthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
