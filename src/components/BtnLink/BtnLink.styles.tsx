import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
