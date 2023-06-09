import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import { useProductById } from '../react-query';

function Product() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   const { productId } = useParams();
   const { data, isLoading } = useProductById(productId);
   const product = data || {};

   // const _relativeProduct = products.filter(
   //    x => x?.category === product.category
   // );

   const title = product.name + `｜北捷線上商城`;

   return (
      <div className="mainLayout">
         <Helmet>
            <title>{title}｜北捷線上商城</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header className="layoutHeader" />

         <div className="layoutContent">
            <div className="container">
               <ProductDetail product={product} isLoading={isLoading} />
            </div>
            {/* <div style={{ backgroundColor: '#E9F8FF' }}>
               <div className="container">
                  <div style={{ fontSize: '1.4rem', fontWeight: '600', textAlign: 'center', padding: '1rem 0' }}>相關商品</div>
                  <ProductList products={_relativeProduct} />
               </div>
            </div> */}
         </div>

         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;