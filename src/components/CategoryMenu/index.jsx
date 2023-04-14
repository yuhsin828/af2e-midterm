import { Menu } from 'antd';
import { useState } from 'react';
import Link from '../Link';
import styles from './categorymenu.module.css';

const items = [
    {
        label:
            <Link to="/categories/all">
                所有商品
            </Link>,
        key: '所有商品',
    },
    {
        label:
            <Link to="/categories/hot">
                熱門精選
            </Link>,
        key: '熱門精選',
    },
    {
        label:
            <Link to="/categories/new">
                新品上市
            </Link>,
        key: '新品上市',
    },
    {
        label: '依功能分類',
        key: '依功能分類',
        children: [
            {
                label:
                    <Link to="/categories/model">
                        北捷模型
                    </Link>,
                key: '北捷模型',
            },
            {
                label:
                    <Link to="/categories/creative">
                        北捷文創
                    </Link>,
                key: '北捷文創',
            },
            {
                label:
                    <Link to="/categories/plaything">
                        玩具小物
                    </Link>,
                key: '玩具小物',
            },
            {
                label:
                    <Link to="/categories/life">
                        生活文具
                    </Link>,
                key: '生活文具',
            },
            {
                label:
                    <Link to="/categories/coffee">
                        嚴選咖啡
                    </Link>,
                key: '嚴選咖啡',
            },
        ]
    },
    // {
    //     label: '依合作品牌',
    //     key: '依合作品牌',
    //     children: [
    //         {
    //             label:
    //                 <Link to="/categories/北捷限定">
    //                     北捷限定
    //                 </Link>,
    //             key: '北捷限定',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/麗嬰">
    //                     麗嬰
    //                 </Link>,
    //             key: '麗嬰',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/新格子">
    //                     新格子
    //                 </Link>,
    //             key: '新格子',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/創玩設計">
    //                     創玩設計
    //                 </Link>,
    //             key: '創玩設計',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/萌萌麻吉貓">
    //                     萌萌麻吉貓
    //                 </Link>,
    //             key: '萌萌麻吉貓',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/Brunch Brother">
    //                     Brunch Brother
    //                 </Link>,
    //             key: 'Brunch Brother',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/生活工場">
    //                     生活工場
    //                 </Link>,
    //             key: '生活工場',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/日本JR EAST">
    //                     日本JR EAST
    //                 </Link>,
    //             key: '日本JR EAST',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/悠遊卡">
    //                     悠遊卡
    //                 </Link>,
    //             key: '悠遊卡',
    //         },
    //         {
    //             label:
    //                 <Link to="/categories/其他聯名">
    //                     其他聯名
    //                 </Link>,
    //             key: '其他聯名',
    //         },
    //     ]
    // },
];

const CategoryMenu = ({ categoryName }) => {
    // const initSelected = items.filter(
    //     categoryName == "所有商品" || categoryName == "熱門精選" || categoryName == "新品上市"
    //         ? x => x?.key == categoryName
    //         : x => x.children?.key == categoryName
    // );
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            defaultOpenKeys={['依功能分類']}
            selectable={false}
            // defaultSelectedKeys={[_initSelected.key]}
            // selectedKeys={[current]}
            mode="inline"
            items={items}
            className={styles.menu}
        />
    );
};

export default CategoryMenu;