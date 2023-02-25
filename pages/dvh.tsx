import styled from 'styled-components';

const Dvh = () => <StyledRoot>dvh</StyledRoot>;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
`;

export default Dvh;
