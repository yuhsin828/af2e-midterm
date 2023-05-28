import NavLink from '../NavLink';
import { Menu } from 'antd';
import { Drawer } from 'antd';
import { SearchOutlined, CustomerServiceOutlined, UserOutlined, GiftOutlined, FireOutlined, AppstoreOutlined, SoundOutlined, ApartmentOutlined } from '@ant-design/icons';
import SetColorMode from "../SetColorMode";
import styles from './navbar.module.css';
import { useUserInfo } from "../../react-query";

export default function NavBar({ open, onClose }) {
    const { data: userInfo} = useUserInfo();

    const items = [
        {
            label:
                <NavLink to="/categories/all" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <AppstoreOutlined className={styles.icon} />所有商品
                </NavLink>,
            key: '所有商品',
        },
        {
            label:
                <NavLink to="/categories/hot" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <FireOutlined className={styles.icon} />熱門精選
                </NavLink>,
            key: '熱門精選',
        },
        {
            label:
                <NavLink to="/categories/new" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <SoundOutlined className={styles.icon} />新品上市
                </NavLink>,
            key: '新品上市',
        },
        {
            label:
                <NavLink to="#" className={styles.navLink}>
                    <ApartmentOutlined className={styles.icon} />依功能分類
                </NavLink>,
            key: '依功能分類',
            children: [
                {
                    label:
                        <NavLink to="/categories/model" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            北捷模型
                        </NavLink>,
                    key: '北捷模型',
                },
                {
                    label:
                        <NavLink to="/categories/creative" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            北捷文創
                        </NavLink>,
                    key: '北捷文創',
                },
                {
                    label:
                        <NavLink to="/categories/plaything" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            玩具小物
                        </NavLink>,
                    key: '玩具小物',
                },
                {
                    label:
                        <NavLink to="/categories/life" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            生活文具
                        </NavLink>,
                    key: '生活文具',
                },
                // {
                //     label:
                //         <NavLink to="/categories/coffee" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                //             嚴選咖啡
                //         </NavLink>,
                //     key: '嚴選咖啡',
                // },
            ]
        },
        {
            label:
                <NavLink to="/activities" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <GiftOutlined className={styles.icon} />優惠活動
                </NavLink>,
            key: '優惠活動',
        },
        {
            label:
                <NavLink to={(userInfo?.name) ? ("/auth/profile") : ("/auth/login?redirect=/auth/profile")} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <UserOutlined className={styles.icon} />
                    {!!userInfo?.name
                        ? `會員專區`
                        : `登入`
                    }
                </NavLink>,
            key: '會員專區',
        },
    ];

    // const SubMenu = () => (
    //     <>
    //         <NavLink to="/categories/all" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             <AppstoreOutlined className={styles.icon} />所有商品
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/hot" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             <FireOutlined className={styles.icon} />熱門精選
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/new" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             <SoundOutlined className={styles.icon} />新品上市
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/model" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             北捷模型
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/creative" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             北捷文創
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/plaything" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             玩具小物
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/life" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             生活文具
    //         </NavLink>
    //         <Divider />
    //         <NavLink to="/categories/coffee" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
    //             嚴選咖啡
    //         </NavLink>
    //     </>
    // )

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
                <NavLink to={(userInfo?.name) ? ("/auth/profile") : ("/auth/login?redirect=/auth/profile")} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    {!!userInfo?.name
                        ? `會員專區`
                        : `登入`
                    }
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
                    <Menu
                        defaultOpenKeys={['依功能分類']}
                        selectable={false}
                        mode="inline"
                        items={items}
                        className={styles.menu}
                    />
                </div>
            </Drawer>
        </>
    );
}