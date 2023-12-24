import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import GloabalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GloabalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to={"/dashboard"} />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='cabins' element={<Cabins />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
          <Route path='account' element={<Account />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const StyledApp = styled.main`
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button>Check In</Button>
              <Button variation='secondary' size='small'>
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of guests' />
              <Input type='number' placeholder='Number of guests' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
*/
