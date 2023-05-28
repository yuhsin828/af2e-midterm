import { Modal, Select, theme } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import { ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import styles from "./cartmodal.module.css";
import { selectCartItems } from "../../redux/cartSlice";
import { useUserInfo } from "../../react-query";
import { motion } from "framer-motion";

const { Option } = Select;

export default function CartModal({ isOpen, toggleModal }) {
   const {
      token: { colorBgBlue, colorBgBlueText },
   } = theme.useToken();

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const { data: userInfo } = useUserInfo();

   return (
      <Modal
         title="購物車"
         open={isOpen}
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.length === 0 ? (
            <div>購物車是空的，快去購物吧！</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className={styles.item}>
                  <Link to={`/products/${item.id}?qtyFromCart=${item.qty}`}>
                     <div onClick={handleCancel}>
                        <img className={styles.image} src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className={styles.content}>
                     <div className={styles.name}>{item.name}</div>
                     <div className={styles.qty}>
                        數量： {"   "}
                        <Select
                           defaultValue={item.qty}
                           onChange={(qty) => dispatch(addCartItems({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              countInStock: item.countInStock,
                              qty,
                           }))}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  </div>
                  <div>
                     <div className={styles.price}>
                        ${item.price * item.qty}
                     </div>
                     <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        <CloseOutlined />
                     </div>
                  </div>
               </li>
            ))
         )}

         <div className={styles.wrap}>
            <div className={styles.total}>總計</div>
            <div className={styles.totalPrice}>${getTotalPrice()}</div>
         </div>

         <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", damping: 10 }}
         >
            <div className={styles.btnCtr}>
               <Link to={(userInfo?.name) ? ("/auth/profile") : ("/auth/login?redirect=/auth/profile")} className={styles.btn} style={{ backgroundColor: colorBgBlue, color: colorBgBlueText }}>
                  <ShoppingCartOutlined />
                  <span style={{ paddingLeft: '0.5rem' }}>結帳</span>
               </Link>
            </div>
         </motion.div>
      </Modal>
   );
}