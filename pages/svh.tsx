import styled from 'styled-components';

const Svh = () => <StyledRoot>svh</StyledRoot>;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  width: 100svw;
  height: 100vh;
  height: 100svh;
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
`;

export default Svh;
