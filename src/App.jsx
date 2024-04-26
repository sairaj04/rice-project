import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import AccountDetailsPage from "./Pages/AccountDetails";
import ShippingAddress from "./Pages/Address";
import LoginPage from "./Pages/Login";
import RegistrationPage from "./Pages/Register";

function App() {
  return (
    <>
      <Navbar />
      {/* <LoginPage /> */}
      {/* <RegistrationPage /> */}
      <Home />
      <Products />
      <Footer />
      {/* <AccountDetailsPage /> */}
      {/* <ShippingAddress /> */}
    </>
  );
}

export default App;
