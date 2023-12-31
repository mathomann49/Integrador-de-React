import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import SignIn from "./Pages/SignIn/SignIn";
import NotFound from "./Pages/NotFound/NotFound";
import ProductsP from "./Pages/ProductsP/Products";
import SignUp from "./Pages/SignUp/SignUp";
import ProductsDetails from "./Pages/ProductsP/ProductsDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PurchaseMade from "./Pages/PurchaseMade/PurchaseMade";
import VerifyUser from "./Pages/VerifyUser/VerifyUser";
import VerifiedUser from "./Pages/VerifyUser/VerifiedUser";
import Purchases from "./Pages/Purchases/Purchases";

function App() {
  return ( 
  <>
    <NavBar />
    
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/Products" element={<ProductsP />}/>
        <Route path= "/Products/:id" element={<ProductsDetails />}/>
        <Route path= "/Contact" element={<Contact />}/>
        <Route path= "/SignIn" element={<SignIn />}/>
        <Route path= "/SignUp" element={<SignUp />}/>
        <Route path= "/PurchaseMade" element={<PurchaseMade />}/>
        <Route path= "/VerifyUser/VerifyUser" element={<VerifyUser />}/>
        <Route path= "/VerifyUser/verifiedUser" element={<VerifiedUser />}/>
        <Route path= "/Purchases" element={<Purchases />}/>
        <Route 
        path= "/CheckOut" 
        element={ <ProtectedRoute redirectTo={"/SignIn"}>
                    <CheckOut />
                  </ProtectedRoute>}/>
        <Route path= "*" element={<NotFound />}/>
      </Routes>
    
  </>
    
  );
}

export default App;
