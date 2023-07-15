import { styled } from 'styled-components';

const Dvh = () => <StyledRoot>dvh</StyledRoot>;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  width: 100dvw;
  height: 100vh;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  height: 100dvh;
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
`;

export default Dvh;
