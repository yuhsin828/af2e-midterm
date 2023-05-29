import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Checkout() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    return (
        <div className="mainLayout">
            <Helmet>
                <title>結帳</title>
                <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <div style={{ fontSize: '1.4rem', fontWeight: '600', textAlign: 'center', margin: '1rem 0' }}>結帳</div>
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Checkout;