import { Menu } from 'antd';
import { useState } from 'react';
import Link from '../Link';

function getItem(label, key, children, disabled) {
    return {
        key,
        children,
        label,
        disabled
    };
}

const items = [
    getItem(
        <Link to="/categories/所有商品">
            所有商品
        </Link>
        , '所有商品'),
    getItem(
        <Link to="/categories/熱門精選">
            熱門精選
        </Link>
        , '熱門精選'),
    getItem(
        <Link to="/categories/新品上市">
            新品上市
        </Link>, '新品上市'),
    // getItem('依合作品牌', 'sub1', [
    //     getItem('北捷限定', '4'),
    //     getItem('麗嬰', '5'),
    //     getItem('新格子', '6'),
    //     getItem('創玩設計', '7'),
    //     getItem('萌萌麻吉貓', '8'),
    //     getItem('Brunch Brother', '9'),
    //     getItem('生活工場', '10'),
    //     getItem('日本JR EAST', '11'),
    //     getItem('悠遊卡', '12'),
    //     getItem('其他聯名', '13'),
    // ], true),
    getItem('依功能類別', 'sub2', [
        getItem(
            <Link to="/categories/北捷模型">
                北捷模型
            </Link>, '北捷模型'),
        getItem(
            <Link to="/categories/北捷文創">
                北捷文創
            </Link>, '北捷文創'),
        getItem(
            <Link to="/categories/玩具小物">
                玩具小物
            </Link>, '玩具小物'),
        getItem(
            <Link to="/categories/生活文具">
                生活文具
            </Link>, '生活文具'),
        getItem(
            <Link to="/categories/嚴選咖啡">
                嚴選咖啡
            </Link>, '嚴選咖啡'),
    ]),
];

const CategoryMenu = ({ categoryName }) => {
    const _initSelected = items.filter(
        categoryName == "所有商品" || categoryName == "熱門精選" || categoryName == "新品上市"
            ? x => x?.key == categoryName
            : x => x.children?.key == categoryName
    );
    // const [current, setCurrent] = useState('');
    // const onClick = (e) => {
    //     console.log('click ', e);
    //     setCurrent(e.key);
    // };

    return (
        <>
            <Menu
                // onClick={onClick}
                style={{
                    width: 200,
                }}
                defaultOpenKeys={['sub2']}
                selectable={false}
                // defaultSelectedKeys={[_initSelected.key]}
                // selectedKeys={[current]}
                mode="inline"
                items={items}
            />
            <div>
                {/* {_initSelected.key} */}
                {/* {categoryName} */}
                {/* {items[2].label} */}
                {/* {items[4].children[1].label} */}
                {/* {items[4].key} */}
            </div>
        </>
    );
};

export default CategoryMenu;