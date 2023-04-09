import { notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css"
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "../Link"

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      placement: 'bottomRight'
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
    <div className={styles.btnCtr}>
      <Link className={styles.btn} onClick={addToCart}>
        <ShoppingCartOutlined />
        <span style={{ paddingLeft: '0.5rem' }}>加入購物車</span>
      </Link>
    </div>
  );
}
