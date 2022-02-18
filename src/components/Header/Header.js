import {Outlet} from 'react-router-dom';
import {
    Container,
    List,
    Item,
    Button
} from './Header.styled';

export default function Header () {
    return (
        <>
        <Container>
<List>
    <Button>
        <Item to="/">Home</Item>
    </Button>
    <Button>
        <Item to="/movies">Movies</Item>
    </Button>
</List>
        </Container>
        <Outlet />
        </>
    )
}