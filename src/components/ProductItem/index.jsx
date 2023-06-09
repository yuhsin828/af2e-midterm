
import Link from '../Link';
import styles from './productitem.module.css';
import { motion } from "framer-motion";
import { theme, message } from "antd";
import _ from 'lodash';
import { useToggleFavoriteProduct, useUserInfo } from '../../react-query';
import { HeartFilled } from "@ant-design/icons";

export default function ProductItem({ product }) {
   const {
      token: { colorTextBlue },
   } = theme.useToken();

   const { mutate } = useToggleFavoriteProduct();
   const { data: userInfo } = useUserInfo() || {};
   const favorites = userInfo.favorites || [];
   let isFavorite = _.includes(favorites, product.id);
   const toggleFavorite = () => {
      if (!!userInfo?.uid)
         mutate({ productId: product.id, uid: userInfo?.uid })
   }

   const [messageApi, contextHolder] = message.useMessage();
   const info = () => {
      messageApi.info({
         content: '請先登入',
         className: styles.message,
         style: {
            marginTop: '20vh',
         },
      });
   };

   return (
      <div className={styles.item}>
         {contextHolder}
         <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 10 }}
         >
            <Link to={`/products/${product.id}`}>
               <img
                  style={{ width: '100%' }}
                  src={product.image}
                  alt={product.name} />
            </Link>
         </motion.div>

         <div className={styles.info}>
            <div className={styles.name}>
               {product.name}
            </div>
            <div className={styles.priceFavorite}>
               <div className={styles.price}>
                  NT${product.price}
               </div>
               <div onClick={(!userInfo?.name) ? (info) : (toggleFavorite)} className={styles.favorite}>
                  <HeartFilled style={{ color: colorTextBlue, opacity: isFavorite ? 1 : '0.2' }} />
               </div>
            </div>
         </div>
      </div>
   );
}