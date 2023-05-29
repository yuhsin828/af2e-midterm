import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginCard from '../components/LoginCard';

function Login() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
            <Helmet>
                <title>登入｜北捷線上商城</title>
                <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <div style={{ fontSize: '1.4rem', fontWeight: '600', textAlign: 'center', margin: '1rem 0' }}>登入會員</div>
                <LoginCard redirect={redirect} />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Login;