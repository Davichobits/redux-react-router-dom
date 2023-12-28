import { Link } from "react-router-dom";
import { SearchOrder } from '../SearchOrder/SearchOrder';
import {UserName} from '../UserName/UserName';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Fast React Pizza</Link>
          </li>
          {/* <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li> */}
          <SearchOrder />
          <UserName />
        </ul>
      </nav>
    </header>
  )
}
