import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  flex-basis: 30%;
  max-width: 320px;
  margin: 20px 0;
  text-align: center;
  box-shadow: #8e9595 0 0 6px;
`;

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  li p {
    font-size: 24px;
  }
  li ul {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
    height: 220px;
  }
`;

export const BtnLink = styled(Link)`
  box-shadow: 0 0 4px 2px #305534;
  padding: 10px 5px;
  text-decoration: none;
  color: #555b56;
  font-weight: bold;
  background-color: #f0ffee;

  :hover {
    background-color: #ced0cd;
    transition: 0.2s;
  }
`;
