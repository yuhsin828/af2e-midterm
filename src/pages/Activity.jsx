import { Helmet } from "react-helmet-async";
import { theme } from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Activity() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const title = "優惠活動｜北捷線上商城";

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
                <div style={{ fontSize: '1.4rem', fontWeight: '600', textAlign: 'center', margin: '1rem 0' }}>優惠活動，敬請期待</div>
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Activity;