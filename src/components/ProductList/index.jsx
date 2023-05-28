import { Row, Col, Skeleton } from "antd";
import ProductItem from "../ProductItem";
import { motion } from "framer-motion";
import * as React from "react";

const animation_ctnr = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const animation_item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function ProductList({ products, isLoading }) {
  return (
    // !products[0]
    //   ?
    //   <div style={{ fontFamily: 'SweiSansCJKtc-Regular', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
    //     新商品預備中，敬請期待
    //   </div>
    //   : 
    <motion.div
      variants={animation_ctnr}
      initial="hidden"
      animate="visible"
    >
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
              ) : (
                <motion.div key={product} variants={animation_item}>
                  <ProductItem product={product} />
                </motion.div>
              )
            }
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}