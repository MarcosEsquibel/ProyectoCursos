import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

   function AppRouter() {
  return (
    <Router>
      <Header toggleMenu={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default AppRouter