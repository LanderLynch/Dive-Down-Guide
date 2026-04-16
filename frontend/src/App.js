import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import RebirthPage from "@/pages/RebirthPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rebirth" element={<RebirthPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
