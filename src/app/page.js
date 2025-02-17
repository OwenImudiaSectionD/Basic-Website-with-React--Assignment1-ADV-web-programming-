"use client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Contactus from "./Contactus";
import Signup from "./Signup";
import Home from "./Home";

export default function Page() {
  return(
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Signup" Component={Signup} />
      <Route path="/Contactus" Component={Contactus} />
    </Router>
  );
}
  
    // return (
    //   <div>
    //     <Navbar />
    //     <Signup />
    //     <Contactus />

    //     <h1>Welcome to My Web App</h1>
    //     <p>This is the home page.</p>
    //   </div>
    // );