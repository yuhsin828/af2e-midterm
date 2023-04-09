import NavLink from '../NavLink';
import { Drawer, Divider, Dropdown } from 'antd';
import { SearchOutlined, CustomerServiceOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import SetColorMode from "../SetColorMode";
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    const items = [
        {
            label:
                <NavLink to="/categories/北捷模型" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    北捷模型
                </NavLink>,
            key: '北捷模型',
        },
        {
            label:
                <NavLink to="/categories/北捷文創" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    北捷文創
                </NavLink>,
            key: '北捷文創',
        },
        {
            label:
                <NavLink to="/categories/玩具小物" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    玩具小物
                </NavLink>,
            key: '玩具小物',
        },
        {
            label:
                <NavLink to="/categories/生活文具" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    生活文具
                </NavLink>,
            key: '生活文具',
        },
        {
            label:
                <NavLink to="/categories/嚴選咖啡" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    嚴選咖啡
                </NavLink>,
            key: '嚴選咖啡',
        },
    ];

    const NavBarItem = () => (
        <>
            <NavLink to="/categories/所有商品" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                所有商品
            </NavLink>
            <Divider className={styles.largeDNone} />

            {/* <NavLink to="/categories/合作品牌" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                合作品牌
            </NavLink>
            <Divider className={styles.largeDNone} /> */}

            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()} className={styles.navLink}>
                    功能分類
                    <DownOutlined className={styles.dropDownIcon} />
                </a>
            </Dropdown>
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
            <Divider className={styles.largeDNone} />

            <NavLink to="#" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <SetColorMode />
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
                // title="北捷線上商城"
                placement="left"
                onClose={onClose}
                open={open}
                width="280"
            >
                <div className={styles.drawer}>
                    <NavBarItem />
                    <NavBarIcon />
                </div>
            </Drawer>
        </>

    );
}