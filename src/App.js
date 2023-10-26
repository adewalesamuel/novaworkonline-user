import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainRoutes } from "./routes/MainRoutes";
import { Views } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connexion" element={<Views.LoginView />} />
        <Route path="/nouveau-motdepasse" element={<Views.PasswordNewView />} />
        <Route path="/motdepasse-oublie" element={<Views.PasswordForgetView />} />
        <Route path="/inscription" element={<Views.RegisterView />} />
        <Route path="*" element={<MainRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;