import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Register";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const { user, setUser } = userStore((state) => state);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else console.log("user is logged out");
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}
import userStore from "./store/auth";

export default App;
