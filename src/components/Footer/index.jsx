import { theme } from 'antd';
import Link from '../Link';
import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgBlue, colorBgBlueText, colorBgWhite, colorBgGreen },
    } = theme.useToken();

    return (
        <div style={{
            backgroundColor: colorBgBlue,
            color: colorBgBlueText,
        }}>
            <div style={{ backgroundColor: colorBgWhite, minHeight: '1rem' }}></div>
            <div style={{ backgroundColor: colorBgGreen, minHeight: '0.8rem' }}></div>
            <div style={{ backgroundColor: colorBgWhite, minHeight: '1rem' }}></div>
            <div>
                <div className="container">
                    <div className={styles.footer}>
                        <div className={styles.footerMain}>
                            <div className={styles.navLogo}>
                                <img className={styles.logo} src="/images/logoWhite.png" alt="logo" />
                            </div>
                            <div className={styles.navItem}>
                                <Link to={``} className={styles.navLink}>
                                    品牌故事
                                </Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link to={``} className={styles.navLink}>
                                    細則及條款
                                </Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link to={``} className={styles.navLink}>
                                    退換貨政策
                                </Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link to={``} className={styles.navLink}>
                                    實體販賣點
                                </Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link to={``} className={styles.navLink}>
                                    聯絡我們
                                </Link>
                            </div>
                        </div>
                        <div className={styles.footerBottom}>2023 © 台北捷運線上商城</div>
                    </div>
                </div>
            </div>
        </div>
    );
}