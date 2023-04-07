import { useState } from "react";
import NavLink from '../NavLink';
import NavBar from "../NavBar";
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"
import { MenuOutlined } from '@ant-design/icons';
import styles from "./header.module.css";

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className={styles.bg}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.navBar}>
                        <NavLink to="/">
                            <img className={styles.logo} src="/images/logoMain.png" alt="logo" />
                        </NavLink>

                        <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                    </div>
                    <CartSummary />
                    {/* <SetColorMode /> */}
                    <MenuOutlined
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                        className={styles.hamburgerIcon}
                    />
                </div>
            </div>
        </div>
    );
}

