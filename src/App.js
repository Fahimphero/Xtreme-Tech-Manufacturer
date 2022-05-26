import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Client Section/Dashboard/Dashboard';
import MyOrders from './Pages/Client Section/MyOrders/MyOrders';
import Reviews from './Pages/Bonus/Reviews/Reviews';
import Profile from './Pages/Client Section/Profile/Profile';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        {/* <Route path='/dashboard/:email' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route> */}
        <Route path='/dashboard/:email' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='myprofile' element={<Profile></Profile>}></Route>

        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
