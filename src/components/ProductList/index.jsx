import { Row, Col } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products }) {
  return (
    <Row gutter={[0, 32]}>
      {products.map(product => (
        <Col
          key={product.id}
          span={12}
          lg={{ span: 6 }}
          style={{ padding: '0 0.5rem' }}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}