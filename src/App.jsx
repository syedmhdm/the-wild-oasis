import styled from "styled-components";

function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
  `;

  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: purple;
    color: white;
    margin: 20px;
    cursor: pointer;
  `;

  const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.8rem 1.2rem;
  `;

  const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button>Check In</Button>
      <Button>Check Out</Button>
      <Input type='number' placeholder='Number of guests' />
    </StyledApp>
  );
}

export default App;
