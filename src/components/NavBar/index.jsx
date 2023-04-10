import NavLink from '../NavLink';
import { Drawer, Divider, Dropdown, Menu } from 'antd';
import { SearchOutlined, CustomerServiceOutlined, UserOutlined, GiftOutlined, FireOutlined, AppstoreOutlined, SoundOutlined } from '@ant-design/icons';
import SetColorMode from "../SetColorMode";
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    // const items = [
    //     {
    //         label:
    //             <NavLink to="/categories/所有商品" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                 所有商品
    //             </NavLink>,
    //         key: '所有商品',
    //     },
    //     {
    //         label:
    //             <NavLink to="/categories/熱門精選" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                 熱門精選
    //             </NavLink>,
    //         key: '熱門精選',
    //     },
    //     {
    //         label:
    //             <NavLink to="/categories/新品上市" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                 新品上市
    //             </NavLink>,
    //         key: '新品上市',
    //     },
    //     {
    //         label: '依功能分類',
    //         key: '依功能分類',
    //         children: [
    //             {
    //                 label:
    //                     <NavLink to="/categories/北捷模型" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                         北捷模型
    //                     </NavLink>,
    //                 key: '北捷模型',
    //             },
    //             {
    //                 label:
    //                     <NavLink to="/categories/北捷文創" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                         北捷文創
    //                     </NavLink>,
    //                 key: '北捷文創',
    //             },
    //             {
    //                 label:
    //                     <NavLink to="/categories/玩具小物" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                         玩具小物
    //                     </NavLink>,
    //                 key: '玩具小物',
    //             },
    //             {
    //                 label:
    //                     <NavLink to="/categories/生活文具" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                         生活文具
    //                     </NavLink>,
    //                 key: '生活文具',
    //             },
    //             {
    //                 label:
    //                     <NavLink to="/categories/嚴選咖啡" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                         嚴選咖啡
    //                     </NavLink>,
    //                 key: '嚴選咖啡',
    //             },
    //         ]
    //     },
    //     {
    //         label:
    //             <NavLink to="/activities" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //                 優惠活動
    //             </NavLink>,
    //         key: '熱門精選',
    //     },
    // ];

    const SubMenu = () => (
        <>
            <NavLink to="/categories/all" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <AppstoreOutlined className={styles.icon} />所有商品
            </NavLink>
            <Divider />
            <NavLink to="/categories/hot" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <FireOutlined className={styles.icon} />熱門精選
            </NavLink>
            <Divider />
            <NavLink to="/categories/new" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <SoundOutlined className={styles.icon} />新品上市
            </NavLink>
            <Divider />
            <NavLink to="/categories/model" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                北捷模型
            </NavLink>
            <Divider />
            <NavLink to="/categories/creative" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                北捷文創
            </NavLink>
            <Divider />
            <NavLink to="/categories/plaything" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                玩具小物
            </NavLink>
            <Divider />
            <NavLink to="/categories/life" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                生活文具
            </NavLink>
            <Divider />
            <NavLink to="/categories/coffee" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                嚴選咖啡
            </NavLink>
        </>
    )

    const NavBarIcon = () => (
        <>
            <NavLink to="#" className={styles.navIcon}>
                <SearchOutlined className={styles.icon} />
            </NavLink>

            <NavLink to="#" className={styles.navIcon}>
                <CustomerServiceOutlined className={styles.icon} />
            </NavLink>

            <NavLink to="#" className={styles.navIcon}>
                <SetColorMode />
            </NavLink>
        </>
    )

    return (
        <>
            <div className={styles.navSection}>
                <NavLink to="/categories/all" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    商品列表
                </NavLink>
                <NavLink to="/activities" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    優惠活動
                </NavLink>
                <NavLink to="/member" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    會員專區
                </NavLink>
            </div>
            <div className={styles.navSection}>
                <NavBarIcon />
            </div>

            <Drawer
                placement="left"
                onClose={onClose}
                open={open}
                width="280"
                footer={<NavBarIcon />}
                className={styles.drawer}
            >
                <div className={styles.drawerMenu}>
                    <SubMenu />
                    <Divider className={styles.largeDNone} />

                    <NavLink to="/activities" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                        <GiftOutlined className={styles.icon} />
                        優惠活動
                    </NavLink>
                    <Divider className={styles.largeDNone} />

                    <NavLink to="/member" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                        <UserOutlined className={styles.icon} />
                        會員專區
                    </NavLink>
                </div>
            </Drawer>
        </>
    );
}