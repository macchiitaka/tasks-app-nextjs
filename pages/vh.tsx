import styled from 'styled-components';

const Vh = () => <StyledRoot>vh</StyledRoot>;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
`;

export default Vh;
