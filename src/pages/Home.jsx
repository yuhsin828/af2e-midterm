import { Helmet } from "react-helmet-async"
import { theme, Carousel, Grid } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import { Link } from "react-router-dom"

const { useBreakpoint } = Grid;

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "北捷線上商城";

  const _hotProducts = products.filter(
    x => x?.hotNew === '熱門精選'
  ).slice(0, 4);
  const _newProducts = products.filter(
    x => x?.hotNew === '新品上市'
  ).slice(0, 4);

  const { lg, xl } = useBreakpoint();

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
      marginTop: lg ? '2rem' : '3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentTitle2: {
      margin: '0 0.5rem',
    },
    titleDivider: {
      display: lg ? 'flex' : 'none',
      height: '0.8px',
      margin: '0 0.5rem',
      flex: 'auto',
      backgroundColor: '#888888',
    },
    btnCtr: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem 0.5rem',
    },
    moreBtn: {
      flex: lg ? 'none' : 1,
      padding: lg ? '0.5rem 3rem' : '0.6rem 0',
      textDecoration: 'none',
      textAlign: 'center',
      backgroundColor: '#017AB1',
      color: '#fefefe',
    },
    bgLightBlue: {
      backgroundColor: '#E9F8FF',
    },
    models: {
      overflowX: 'scroll',
      display: 'flex',
      justifyContent: xl ? 'center' : 'start',
    },
    modelCtr: {
      margin: '3rem 1rem',
    },
    modelImg: {
      width: '15rem',
      height: 'auto',
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
          <img style={styles.banner} src="/images/banner_1.png" alt="banner" />
        </div>
        <div>
          <img style={styles.banner} src="/images/banner_2.png" alt="banner" />
        </div>
        <div>
          <img style={styles.banner} src="/images/banner_3.png" alt="banner" />
        </div>
        <div>
          <img style={styles.banner} src="/images/banner_4.png" alt="banner" />
        </div>
      </Carousel>

      <div className="container" style={styles.content}>
        <div style={styles.contentTitle}>熱門精選</div>
        <ProductList products={_hotProducts} />
        <div style={styles.btnCtr}>
          <Link to="/categories/熱門精選" style={styles.moreBtn}>
            查看更多
          </Link>
        </div>

        <div style={styles.contentTitleDivider}>
          <div style={styles.contentTitle2}>新品上市</div>
          <div style={styles.titleDivider}></div>
        </div>
        <ProductList products={_newProducts} />
        <div style={styles.btnCtr}>
          <Link to="/categories/新品上市" style={styles.moreBtn}>
            查看更多
          </Link>
        </div>
      </div>

      <div style={styles.bgLightBlue}>
        <div style={styles.models}>
          <Link to="/products/MFrvgXh8" style={styles.modelCtr}>
            <img style={styles.modelImg} src="/images/modelImg_1.png" alt="modelImg" />
          </Link>
          <Link to="/products/KdBsuFM9" style={styles.modelCtr}>
            <img style={styles.modelImg} src="/images/modelImg_2.png" alt="modelImg" />
          </Link>
          <Link to="/products/LDC75wNM" style={styles.modelCtr}>
            <img style={styles.modelImg} src="/images/modelImg_3.png" alt="modelImg" />
          </Link>
          <Link to="/categories/北捷模型" style={styles.modelCtr}>
            <img style={styles.modelImg} src="/images/modelImg_more.png" alt="modelImg" />
          </Link>
        </div>
      </div>

      <Footer className="" />
    </div>
  );
}

export default Home;