import { Helmet } from "react-helmet-async";
import { theme, Carousel, Grid } from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import { useProducts } from '../react-query';

const { useBreakpoint } = Grid;

function Home() {
  const {
    token: { colorBgBase, colorTextBase, colorBgBlue, colorBgBlueText, colorBgLightBlue },
  } = theme.useToken();
  const title = "北捷線上商城";

  const { data, isLoading } = useProducts();
  const products = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  const { sm, md, xl } = useBreakpoint();

  const showItemCount = xl ? 4 : sm ? 3 : 4;

  const _hotProducts = products.filter(
    x => x?.hotNew === 'hot'
  ).slice(0, showItemCount);
  const _newProducts = products.filter(
    x => x?.hotNew === 'new'
  ).slice(0, showItemCount);

  const styles = {
    banner: {
      height: 'auto',
      width: '100%',
    },
    content: {
      padding: '3rem 0',
      fontFamily: 'SweiSansCJKtc-Regular',
    },
    contentTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      textAlign: 'center',
      margin: '1rem 0',
    },
    contentTitleDivider: {
      fontSize: '1.4rem',
      fontWeight: '600',
      margin: '1rem 0',
      marginTop: md ? '3rem' : '4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentTitle2: {
      margin: '0 0.5rem',
    },
    titleDivider: {
      display: md ? 'flex' : 'none',
      height: '0.8px',
      margin: '0 0.5rem',
      flex: 'auto',
      backgroundColor: colorTextBase,
      opacity: 0.6,
    },
    btnCtr: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem 0.5rem',
    },
    moreBtn: {
      flex: md ? 'none' : 1,
      padding: md ? '0.5rem 3rem' : '0.6rem 0',
      textDecoration: 'none',
      fontSize: '0.9rem',
      textAlign: 'center',
      backgroundColor: colorBgBlue,
      color: colorBgBlueText,
    },
    bgLightBlue: {
      backgroundColor: colorBgLightBlue,
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
    },
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>

      <Header />

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
        <ProductList products={_hotProducts} isLoading={isLoading} />
        <div style={styles.btnCtr}>
          <Link to="/categories/hot" style={styles.moreBtn}>
            查看更多
          </Link>
        </div>

        <div style={styles.contentTitleDivider}>
          <div style={styles.contentTitle2}>新品上市</div>
          <div style={styles.titleDivider}></div>
        </div>
        <ProductList products={_newProducts} isLoading={isLoading} />
        <div style={styles.btnCtr}>
          <Link to="/categories/new" style={styles.moreBtn}>
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
          <Link to="/categories/model" style={styles.modelCtr}>
            <img style={styles.modelImg} src="/images/modelImg_more.png" alt="modelImg" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;