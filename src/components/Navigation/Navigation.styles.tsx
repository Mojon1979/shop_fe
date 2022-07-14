import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  grid-area: 1/2/2/3;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  font-size: 25px;
  color: #82947c;

  &:last-child {
    position: absolute;
    right: 25px;
  }

  :hover {
    text-shadow: 1px 1px #c0bcbc;
    transition: 0.3s;
  }

  &.active {
    color: #c0bcbc;
  }
`;
