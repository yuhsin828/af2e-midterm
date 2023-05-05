import { useState } from "react";
import NavLink from '../NavLink';
import NavBar from "../NavBar";
import CartSummary from "../CartSummary";
import { MenuOutlined } from '@ant-design/icons';
import styles from "./header.module.css";
import { theme } from "antd";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    const {
        token: { colorBgHeader },
    } = theme.useToken();

    const lightMode = useSelector(selectLightMode);

    return (
        <div className={styles.bg} style={{ backgroundColor: colorBgHeader }}>
            <div className="container">
                <div className={styles.header}>
                    <MenuOutlined
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                        className={styles.hamburgerIcon}
                    />
                    <div className={styles.navBar}>
                        <NavLink to="/">
                            {
                                lightMode ? (
                                    <img className={styles.logo} src="/images/logoMain.png" alt="logo" />
                                ) : (
                                    <img className={styles.logo} src="/images/logoMainWhite.png" alt="logo" />
                                )
                            }
                        </NavLink>

                        <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                    </div>
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}