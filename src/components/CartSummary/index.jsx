import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import BasketModal from "../BasketModal"
import { ShoppingCartOutlined } from '@ant-design/icons';
import { selectCartItems } from "../../redux/cartSlice";
import styles from "./cartsummary.module.css"

export default function CartSummary() {
  const { token: { colorTextBase } } = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0)
    ? cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={toggleOpen} className={styles.cartSummary} >
        <Badge count={count}>
          <ShoppingCartOutlined className={styles.icon} color={colorTextBase} />
        </Badge>
      </div>

      <BasketModal
        isOpen={isOpen}
        toggleModal={toggleOpen}
      />
    </>
  );
}
