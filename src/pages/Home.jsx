import { Helmet } from "react-helmet-async"
import { theme, Carousel } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import { Link } from "react-router-dom"

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "北捷線上商城";

  const _hotProducts = products.filter(
    x => x?.hotNew === 'hot'
  );
  const _newProducts = products.filter(
    x => x?.hotNew === 'new'
  );

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
      margin: '1rem 0',
    },
    contentTitleDivider: {
      fontSize: '1.2rem',
      fontWeight: '700',
      margin: '1rem 0',
      display: 'flex',
      alignItems: 'center',
    },
    contentTitle2: {
      margin: '0 0.5rem',
    },
    titleDivider: {
      height: '1px',
      margin: '0 0.5rem',
      flex: 'auto',
      backgroundColor: '#888888',
    },
    btnCtr: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem 0',
    },
    moreBtn: {
      padding: '0.5rem 3rem',
      textDecoration: 'none',
      backgroundColor: '#017AB1',
      color: '#fefefe',
    },
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
        <ProductList products={_hotProducts} />
        <div style={styles.btnCtr}>
          <Link to="/categories/hot" style={styles.moreBtn}>
            查看更多
          </Link>
        </div>

        <div style={styles.contentTitleDivider}>
          <div style={styles.contentTitle2}>新品上市</div>
          <div style={styles.titleDivider}></div>
        </div>
        <ProductList products={_newProducts} />
        <div style={styles.btnCtr}>
          <Link to="/categories/new" style={styles.moreBtn}>
            查看更多
          </Link>
        </div>
      </div>

      <Footer className="" />
    </div>
  );
}

export default Home;