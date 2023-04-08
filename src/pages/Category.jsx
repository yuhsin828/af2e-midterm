import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import { theme, Row, Col } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import CategoryMenu from "../components/CategoryMenu";

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
        <Row gutter={[0, 32]}>
          <Col
            span={0}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xxl={{ span: 4 }}
            style={{ paddingRight: '0.5rem', }}
          >
            <CategoryMenu />
          </Col>
          <Col
            span={24}
            md={{ span: 16 }}
            lg={{ span: 18 }}
            xxl={{ span: 20 }}
            style={{ padding: 0 }}
          >
            <ProductList products={_products} />
          </Col>
        </Row>
      </div>

      <Footer className="layoutFooter" />
    </div >
  );
}

export default Category;