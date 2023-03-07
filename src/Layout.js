import { Outlet } from 'react-router-dom';
import Nav from 'components/commons/Nav';
import Footer from 'components/commons/Footer';
import styled from 'styled-components';

function Layout() {
  return (
    <>
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: calc(100vh - 364px);
  position: relative;
  padding-bottom: 60px;
`;

export default Layout;
