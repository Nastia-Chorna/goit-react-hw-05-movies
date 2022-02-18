import styled from "styled-components";

export const Container= styled.div`
max-width: 1400px;
background-color: #2e2d2d;
margin: 0 auto;
margin-top: 15px
`

export const Title= styled.h1`
font-size: 23px;
margin-left: 150px;
font-family: cursive;
font-weight: bold;


`

export const Movies= styled.ul`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 66px 30px;
  margin-bottom: 32px;
`
export const Card= styled.li`
display: flex;

  width: 340px;
  height: 500px;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.2);
    
  }
`
export const MoviePic = styled.img`
  width: 340px;
  height: 500px;
  border-radius: 6px;
`;

export const MovieTtitle = styled.p`
font-size: 17px;
font-family: cursive;
font-weight: bold;
text-decoration: none;
color: white;
list-style-type: none;

`
