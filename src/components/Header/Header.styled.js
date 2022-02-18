import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Container= styled.nav `
max-width: 1400px;
display: flex;
justify-content: center;
color: transparent;
margin: 0 auto;
background-color: black;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
export const List = styled.ul`
display: flex;
padding: 30px;
gap: 20px;
text-decoration: none;
`
export const Item = styled(NavLink)`
list-style-type: none;
text-decoration: none;
padding: 30px;
font-size: 23px;
font-family: cursive;
font-weight: bold;
line-height: 15px;
:hover {
    color: #e50914;
  }
  &.active {
    color: #e50914;
  }
`;
export const Button = styled.li`

list-style-type: none;
text-decoration: none;
`