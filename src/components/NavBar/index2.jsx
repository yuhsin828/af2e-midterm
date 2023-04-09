import NavLink from '../NavLink';
import { Drawer, Divider, Dropdown, Menu } from 'antd';
import { SearchOutlined, CustomerServiceOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import SetColorMode from "../SetColorMode";
import styles from './navbar.module.css';
import { useState } from 'react';

// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function NavBar({ open, onClose }) {
    const items = [
        {
            label:
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    首頁
                </NavLink>,
            key: '首頁',
        },
        {
            label:
                <NavLink to="/categories/所有商品" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    商品列表
                </NavLink>,
            key: '商品列表',
        },
        {
            label:
                <NavLink to="/activities/優惠活動" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    優惠活動
                </NavLink>,
            key: '優惠活動',
        },
        {
            label:
                <NavLink to="/about/品牌故事" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    品牌故事
                </NavLink>,
            key: '品牌故事',
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    // const NavBarItem = () => (
    //     <>
    //         <NavLink to="/categories/所有商品" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             所有商品
    //         </NavLink>
    //         <Divider className={styles.largeDNone} />

    //         {/* <NavLink to="/categories/合作品牌" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             合作品牌
    //         </NavLink>
    //         <Divider className={styles.largeDNone} /> */}

    //         <Dropdown menu={{ items }}>
    //             <a onClick={(e) => e.preventDefault()} className={styles.navLink}>
    //                 功能分類
    //                 <DownOutlined className={styles.dropDownIcon} />
    //             </a>
    //         </Dropdown>
    //         <Divider className={styles.largeDNone} />

    //         <NavLink to="/activities/優惠活動" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             優惠活動
    //         </NavLink>
    //         <Divider className={styles.largeDNone} />
    //     </>
    // )

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
                    {/* <NavBarItem /> */}
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
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
                    {/* <NavBarItem /> */}
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                    <NavBarIcon />
                </div>
            </Drawer>
        </>

    );
}