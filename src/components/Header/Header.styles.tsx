import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 1400px;
  height: 100px;
  margin: 0 auto;
  h1 {
    flex-grow: 1;
  }
`;

export const StyledLink = styled(Link)`
  padding-left: 20px;
  text-decoration: none;
  color: #c0bcbc;
`;
