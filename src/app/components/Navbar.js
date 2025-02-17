import { Link } from "react-router-dom";

export default function Navbar(){
    const Navbar = () => {
        return (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        );
      };
      
}
