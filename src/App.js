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

import Profile from './Pages/Client Section/Profile/Profile';
import Payment from '../src/Pages/Client Section/Payment/Payment';
import AddReviews from './Pages/Client Section/AddReviews/AddReviews';
import AboutMe from './Pages/AboutMe/AboutMe';
import ManageUsers from './Pages/Admin Section/ManageUsers/ManageUsers';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myportfolio' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        {/* <Route path='/dashboard/:email' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route> */}
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreviews' element={<AddReviews></AddReviews>}></Route>
          <Route path='myprofile' element={<Profile></Profile>}></Route>
          <Route path='payment/:id' element={
            <Payment></Payment>}>
          </Route>
          <Route path='manageusers' element={<ManageUsers></ManageUsers>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
