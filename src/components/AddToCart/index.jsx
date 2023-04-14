import { notification, theme } from "antd";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css";
import { ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function AddToCart({ product, qty }) {
  const {
    token: { colorBgGreen, colorBgBlue, colorBgBlueText },
  } = theme.useToken();

  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: '成功加入購物車',
      description:
        `${product.name}×${qty}`,
      icon: (
        <CheckOutlined style={{ color: colorBgGreen }} />
      ),
      placement: 'bottomRight',
      style: { fontFamily: 'SweiSansCJKtc-Regular' }
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <div className={styles.btnCtr} style={{ backgroundColor: colorBgBlue }}>
      <Link className={styles.btn} style={{ color: colorBgBlueText }} onClick={addToCart}>
        <ShoppingCartOutlined />
        <span style={{ paddingLeft: '0.5rem' }}>加入購物車</span>
      </Link>
    </div>
  );
}
