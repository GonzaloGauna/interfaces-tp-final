import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FormPage = lazy(() => import("./components/Form"));
const HomePage = lazy(() => import("./components/Home"));
const ProfilePage = lazy(() => import("./components/Profile"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="lazy-loading">Cargando....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
