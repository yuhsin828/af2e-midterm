import { useState, useEffect } from "react";
import { Row, Col, Select, theme, Skeleton } from "antd";
import { useSearchParams } from 'react-router-dom';
import AddToCart from "../AddToCart";
import styles from "./productdetail.module.css";
const { Option } = Select;

function ProductDetail({ product, isLoading }) {
   const {
      token: { colorTextBlue },
   } = theme.useToken();

   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   useEffect(() => {
      setQty(initQty)
   }, [initQty])

   return (
      <Row gutter={[0, 32]}
         className={styles.main}
      >
         <Col
            span={24}
            md={{ span: 12 }}
            lg={{ span: 10 }}
            xl={{ span: 10 }}
         >
            {isLoading
               ? (
                  <div style={{ maxWidth: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <Skeleton.Image active style={{ minWidth: '320px', minHeight: '320px' }} />
                  </div>
               ) : (<img
                  className={styles.image}
                  src={product.image}
                  alt={product.name}
               />
               )
            }
         </Col>
         <Col
            span={24}
            md={{ span: 12 }}
            lg={{ span: 14 }}
            xl={{ span: 10 }}
            className={styles.info}
         >
            <Skeleton loading={isLoading} active title={false} paragraph={{ rows: 5 }} >
               <div className={styles.intro}>
                  <div className={styles.name} >
                     {product.name}
                  </div>
                  <div style={{ color: colorTextBlue }} className={styles.price} >
                     NT${product.price}
                  </div>
                  <div className={styles.description}>
                     {product.description}
                  </div>
               </div>

               <div className={styles.shopping}>
                  <div className={styles.qty}>
                     數量： {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                     <span className={styles.status}>
                        庫存: {product.countInStock > 0 ? `${product.countInStock}` : "無"}
                     </span>
                  </div>

                  {/* <p className={styles.qty}>
                     Total Price: {product.price * qty}
                  </p> */}
                  <AddToCart product={product} qty={qty} />
               </div>
            </Skeleton>
         </Col>
      </Row>
   );
}

export default ProductDetail;