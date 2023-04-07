import NavLink from '../NavLink';
import { Drawer, Divider, Dropdown, Space } from 'antd';
import { SearchOutlined, CustomerServiceOutlined, UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    // const items = [
    //     {
    //         key: '1',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //                 北捷限定
    //             </a>
    //         ),
    //     },
    //     {
    //         key: '2',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //                 麗嬰
    //             </a>
    //         ),
    //     },
    //     {
    //         key: '3',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //                 新格子
    //             </a>
    //         ),
    //     },
    //     {
    //         key: '4',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //                 創玩設計
    //             </a>
    //         ),
    //     },
    // ];

    const NavBarItem = () => (
        <>
            <NavLink to="/categories/所有商品" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                所有商品
            </NavLink>
            <Divider className={styles.largeDNone} />

            <NavLink to="/categories/合作品牌" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                合作品牌
            </NavLink>
            <Divider className={styles.largeDNone} />

            <NavLink to="/categories/功能分類" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                功能分類
            </NavLink>
            <Divider className={styles.largeDNone} />

            <NavLink to="/activities/優惠活動" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                優惠活動
            </NavLink>
            <Divider className={styles.largeDNone} />
        </>
    )

    const NavBarIcon = () => (
        <>
            <NavLink to="#" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <SearchOutlined className={styles.icon} />
                <span className={styles.largeDNone}>搜尋</span>
            </NavLink>
            <Divider className={styles.largeDNone} />

            <NavLink to="#" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <CustomerServiceOutlined className={styles.icon} />
                <span className={styles.largeDNone}>客服</span>
            </NavLink>
            <Divider className={styles.largeDNone} />

            <NavLink to="#" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <UserOutlined className={styles.icon} />
                <span className={styles.largeDNone}>會員</span>
            </NavLink>
        </>
    )

    return (
        <>
            <>
                <div className={styles.navSection}>
                    <NavBarItem />
                </div>
                <div className={styles.navSection}>
                    <NavBarIcon />
                </div>
            </>

            <Drawer
                title="北捷線上商城"
                placement="right"
                onClose={onClose}
                open={open}
            >
                <div className={styles.drawer}>
                    <NavBarItem />
                    <NavBarIcon />
                </div>
            </Drawer>
        </>

    );
}