"use client";
import {Link} from 'react-router-dom';
import Home from './Home';


export default function Navbar(){
    const Navbar = () => {
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            <li><Link to="/Contactus">Contact us</Link></li>
        </ul>
    </nav>
};
};
