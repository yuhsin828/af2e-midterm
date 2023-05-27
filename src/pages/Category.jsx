import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import _ from 'lodash';
import { theme, Row, Col } from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import categories from "../json/categories.json";
import CategoryMenu from "../components/CategoryMenu";
import { useProductsByCategory } from '../react-query';

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { categoryName } = useParams();
  const { data, isLoading } = useProductsByCategory(categoryName);
  const products = data || [{ id: 1 }, { id: 2 }];

  const categoryNameCH = categories.find(
    x => x.en == categoryName
  );
  const title = _.startCase(categoryNameCH.ch) + `｜北捷線上商城`;

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
            style={{ paddingRight: '0.5rem', margin: '1rem 0' }}
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
            <div style={{ fontSize: '1.4rem', fontWeight: '600', textAlign: 'center', margin: '1rem 0', fontFamily: 'SweiSansCJKtc-Regular' }}>{categoryNameCH.ch}</div>
            <ProductList products={products} isLoading={isLoading} />
          </Col>
        </Row>
      </div>

      <Footer className="layoutFooter" />
    </div >
  );
}

export default Category;