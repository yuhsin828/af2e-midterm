import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();

  const _products = products.filter(
    categoryName == "熱門精選" || categoryName == "新品上市"
      ? x => x?.hotNew === categoryName
      : x => x?.category === categoryName
  );

  const title = _.startCase(categoryName) + `｜北捷線上商城`;

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
        <ProductList products={_products} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
