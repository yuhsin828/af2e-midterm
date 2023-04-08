
import Link from '../Link';
import styles from './productitem.module.css';

export default function ProductItem({ product }) {
   return (
      <div className={styles.item}>
         <Link to={`/products/${product.id}`}>
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
            <div className={styles.info}>
               <div className={styles.name}>
                  {product.name}
               </div>
               <div className={styles.price}>
                  NT${product.price}
               </div>
            </div>
         </Link>

      </div>
   );
}