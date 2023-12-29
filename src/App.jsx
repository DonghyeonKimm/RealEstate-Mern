/* eslint-disable no-unused-vars */
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sign-in" element={<Signin />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}