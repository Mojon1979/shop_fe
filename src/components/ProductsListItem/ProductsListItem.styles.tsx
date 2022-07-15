import styled from 'styled-components';

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
