import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileCard from '../components/ProfileCard';

function Profile() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    return (
        <div className="mainLayout">
            <Helmet>
                <title>會員專區｜北捷線上商城</title>
                <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <ProfileCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Profile;