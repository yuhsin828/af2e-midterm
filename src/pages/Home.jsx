import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "北捷線上商城｜首頁";

  return (
    <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header className="layoutHeader" />
      <div className="layoutContent container">
        <ProductList products={products} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
