import { Route, Routes, useNavigate } from "react-router-dom";
import { useUnit } from "effector-react";

import { HomePage, AuthPage } from "@/pages";

import * as AuthModel from "@/widgets/auth/model";

function App() {
  const navigate = useNavigate();
  const [isAuth] = useUnit([AuthModel.$isAuth]);

  if (isAuth) {
    navigate("/home");
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
