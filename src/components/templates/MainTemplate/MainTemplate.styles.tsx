import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  background-color: #305534;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 25% 75%;
  overflow-y: hidden;
`;
