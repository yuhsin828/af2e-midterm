import { Helmet } from "react-helmet-async"
import { theme, Carousel } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "北捷線上商城";
  const styles = {
    banner: {
      height: 'auto',
      width: '100%',
    },
    content: {
      padding: '3rem 0',
    },
    contentTitle: {
      fontSize: '1.2rem',
      fontWeight: '700',
      textAlign: 'center',
      paddingBottom:'1rem',
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>

      <Header className="" />

      <Carousel autoplay>
        <div>
          <img style={styles.banner} src="/images/banner_0.png" alt="banner" />
        </div>
        <div>
          <img style={styles.banner} src="/images/banner_1.png" alt="banner" />
        </div>
        <div>
          <img style={styles.banner} src="/images/banner_2.png" alt="banner" />
        </div>
      </Carousel>

      <div className="container" style={styles.content}>
        <div style={styles.contentTitle}>熱門精選</div>
        <ProductList products={products} />
      </div>

      <Footer className="" />
    </div>
  );
}

export default Home;