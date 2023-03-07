import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import OrderPage from './pages/order/OrderPage';
import CategoryPage from './pages/CategoryPage';
import OrderCompletePage from './pages/order/OrderCompletePage';
import OrderLookUpPage from './pages/order/OrderLookUpPage';
import OrderModifyPage from './pages/order/OrderModifyPage';
import OrderModifyCompletePage from './pages/order/OrderModifyCompletePage';
import AdminPage from './pages/AdminPage';
import NonUserLoginPage from 'pages/NonUserLoginPage';
import NonUserOrderLookUpPage from 'pages/order/NonUserOrderLookUpPage';
import ChangePasswordPage from 'pages/ChangePasswordPage';
import Nav from 'components/commons/Nav';
import Footer from 'components/commons/Footer';
import Layout from 'Layout';

function Router() {
  return (
    <div className="routes">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/nonUserLogin" element={<NonUserLoginPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orderComplete" element={<OrderCompletePage />} />
            <Route path="/orderLookUp" element={<OrderLookUpPage />} />
            <Route path="/nonUserOrderLookUp" element={<NonUserOrderLookUpPage />} />
            <Route path="/orderModify" element={<OrderModifyPage />} />
            <Route path="/orderModifyComplete" element={<OrderModifyCompletePage />} />
            <Route path="/changePassword" element={<ChangePasswordPage />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default Router;
