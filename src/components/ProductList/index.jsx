import { Row, Col, Skeleton } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products, isLoading }) {
  return (
    !products[0]
      ?
      <div style={{ fontFamily: 'SweiSansCJKtc-Regular', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        新商品預備中，敬請期待
      </div>
      :
      <Row gutter={[0, 32]}>
        {products.map(product => (
          <Col
            key={product.id}
            span={12}
            sm={{ span: 8 }}
            xl={{ span: 6 }}
            style={{ padding: '0 0.5rem' }}
          >
            {isLoading
              ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Skeleton.Image active style={{ margin: '1rem 0' }} />
                  <Skeleton active title={false} paragraph={{ rows: 2 }} />
                </div>
              ) : (<ProductItem product={product} />
              )
            }

            {/* <Skeleton loading={isLoading} active paragraph={{ rows: 1, }}>
              <ProductItem product={product} />
            </Skeleton> */}
          </Col>
        ))}
      </Row>
  );
}