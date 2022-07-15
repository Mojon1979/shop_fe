import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 3;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  font-size: 25px;
  color: #82947c;
  :hover {
    text-shadow: 1px 1px #c0bcbc;
    transition: 0.3s;
  }
  &.active {
    color: #c0bcbc;
  }
`;
