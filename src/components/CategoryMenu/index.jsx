import { Menu } from 'antd';
import { useState } from 'react';

function getItem(label, key, children, type) {
    return {
        key,
        children,
        label,
        type,
    };
}

const items = [
    getItem('所有商品', 'sub1'),
    getItem('熱門精選', 'sub2'),
    getItem('新品上市', 'sub3'),
    getItem('依合作品牌', 'sub4', [
        getItem('北捷限定', '5'),
        getItem('麗嬰', '6'),
        getItem('新格子', '7'),
        getItem('創玩設計', '8'),
        getItem('萌萌麻吉貓', '9'),
        getItem('Brunch Brother', '10'),
        getItem('生活工場', '11'),
        getItem('日本JR EAST', '12'),
        getItem('悠遊卡', '13'),
        getItem('其他聯名', '14'),

    ]),
    getItem('依功能類別', 'sub5', [
        getItem('北捷模型', '15'),
        getItem('北捷文創', '16'),
        getItem('玩具小物', '17'),
        getItem('生活文具', '18'),
        getItem('嚴選咖啡', '19'),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

const CategoryMenu = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                width: 200,
            }}
            items={items}
        />
    );
};
export default CategoryMenu;