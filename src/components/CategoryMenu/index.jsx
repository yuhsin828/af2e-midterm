import { Menu, theme } from 'antd';
import NavLink from '../NavLink';
import { FireOutlined, AppstoreOutlined, SoundOutlined, ApartmentOutlined } from '@ant-design/icons';
import styles from './categorymenu.module.css';

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
            {
                label:
                    <NavLink to="/categories/coffee" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                        嚴選咖啡
                    </NavLink>,
                key: '嚴選咖啡',
            },
        ]
    },
];

const CategoryMenu = () => {
    const {
        token: { colorBgBase },
    } = theme.useToken();

    return (
        <Menu
            defaultOpenKeys={['依功能分類']}
            selectable={false}
            mode="inline"
            items={items}
            className={styles.menu}
            style={{ backgroundColor: colorBgBase }}
        />
    );
};

export default CategoryMenu;