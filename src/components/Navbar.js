import Item from "./Item"
import MenuNav from "./MenuNav"
import '../index.css';

function Navbar(){
    return (
        <div>
        <nav>
            <ul>
            <li className="transition-all duration-900 cursor-pointer"><a href = "/">Home</a></li>
            <li className="transition-all duration-900 cursor-pointer"><a href = "/posts">Posts</a></li>
            <li className="transition-all duration-900 cursor-pointer"><a href = "/account">Account</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;