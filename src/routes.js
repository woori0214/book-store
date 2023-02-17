import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import LoginPage from './Pages/LoginPage';
import MyPage from './Pages/MyPage';
import SignUpPage from './Pages/SignUpPage';
// import OrderPage from './Pages/OrderPage';
import CategoryPage from './Pages/CategoryPage';
// import OrderCompletePage from './Pages/OrderCompletePage';
// import OrderLookUpPage from './Pages/OrderLookUpPage';
// import OrderModifyPage from './Pages/OrderModifyPage';
// import OrderModifyCompletePage from '/Pages/OrderModifyCompletePage';
import AdminPage from './Pages/AdminPage';

function Router() {
  return (
    <div className="routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          {/* <Route path="/order" element={<OrderPage />} /> */}
          <Route path="/:category" element={<CategoryPage />} />
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
