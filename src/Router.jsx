import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Category from './pages/Category';
import Product from './pages/Product';
import Activity from './pages/Activity';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
  return (
    <ConfigProvider theme={theme} >
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories">
              <Route path=":categoryName" element={<Category />} />
            </Route>
            <Route path="products">
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="activities" element={<Activity />}>
              <Route path=":activityName" />
            </Route>
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

export default Router;
