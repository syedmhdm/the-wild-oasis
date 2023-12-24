import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
  `;

  const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Input type='number' placeholder='Number of guests' />
      </StyledApp>
    </>
  );
}

export default App;
