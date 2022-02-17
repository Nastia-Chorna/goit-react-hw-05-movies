import { NavLink } from "react-router-dom";
import {
  Nav,
  Link
} from './Navigation.styled';

const Navigation =() => {
return (
<div>

<Nav>
  <Link to="/home">Home</Link>
  <Link to="/movies">Movies</Link>
</Nav>

</div>
)
}

export default Navigation;

