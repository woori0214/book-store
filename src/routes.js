import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
// import OrderPage from './pages/OrderPage';
import CategoryPage from './pages/CategoryPage';
// import OrderCompletePage from './pages/OrderCompletePage';
// import OrderLookUpPage from './pages/OrderLookUpPage';
// import OrderModifyPage from './pages/OrderModifyPage';
// import OrderModifyCompletePage from '/pages/OrderModifyCompletePage';
import AdminPage from './pages/AdminPage';

function Router() {
  return (
    <div className="routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          {/* <Route path="/order" element={<OrderPage />} /> */}
          {/* <Route path="/orderComplete" element={<OrderCompletePage />} />
          <Route path="/orderLookUp" element={<OrderLookUpPage />} />
          <Route path="/orderModify" element={<OrderModifyPage />} />
          <Route path="/orderModifyComplete" element={<OrderModifyCompletePage />} /> */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
