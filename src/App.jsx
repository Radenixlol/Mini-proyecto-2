import { Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar';
import { AuthContextProvider } from "./context/AuthContext";
// import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import Pelis from './Pages/Pelis';
// import Details from './Pages/Details';
// import Filter from './Pages/Filter';
// import ProtectedRoute from './Components/ProtectedRoute';
import {
  Details_link,
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "./Links/links";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path={Home_link} element={<h1>Home</h1>} />
          <Route path={Register_link} element={<Register />} />
          <Route path={Login_link} element={<Login />} />
          <Route path={Pelis_link} element={<h1>Pelis</h1>} />
          <Route path={Details_link} element={<h1>Detalles</h1>} />
          <Route path={Filter_link} element={<h1>Filter</h1>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
