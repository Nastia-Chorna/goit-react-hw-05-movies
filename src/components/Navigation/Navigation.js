import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
gap: 30px;
`
const Link = styled(NavLink)`
&.active {
  color: red;
}
`
const Wrapper = styled.div`
padding: 40px;
`
const Navigation =() => {
return (
<Wrapper>

<Nav>
  <Link to="/home">Home</Link>
  <Link to="/movies">Movies</Link>
</Nav>

</Wrapper>
)
}

export default Navigation;

