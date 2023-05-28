import { Badge, theme } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useUserInfo } from "../../react-query";
import styles from "./favorite.module.css";

export default function Favorite() {
  const {
    token: { colorTextBase },
  } = theme.useToken();

  const { data: userInfo } = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  const count = favorites.length;
  const toggleOpen = () => { };

  return (
    <div onClick={toggleOpen} className={styles.favorite}>
      <Badge count={count}>
        <HeartOutlined className={styles.icon} />
      </Badge>
    </div>
  );
}
