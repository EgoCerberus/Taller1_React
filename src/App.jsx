import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./features/landing/components/Header";
import { Main } from "./features/landing/components/Main";
import { Login } from "./features/auth/components/Login";
import { Register } from "./features/auth/components/Register";
import { ForgotPassword } from "./features/auth/components/ForgotPassword";
import { Rickandmorty } from "./features/landing/components/Rickandmorty";
import { Props } from "./features/landing/components/Props";
import { Footer } from "./features/landing/components/Footer";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rickandmorty" element={<Rickandmorty />} />
        <Route path="/props" element={<Props />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
