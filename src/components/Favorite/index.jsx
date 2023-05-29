import { Badge, theme } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useUserInfo } from "../../react-query";
import styles from "./favorite.module.css";
import { useState } from "react";
import FavoriteModal from "../FavoriteModal";

export default function Favorite() {
  const {
    token: { colorTextBlue },
  } = theme.useToken();

  const { data: userInfo } = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  const count = favorites.length;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={toggleOpen} className={styles.favorite}>
        <Badge count={count} style={{ backgroundColor: colorTextBlue }}>
          <HeartOutlined className={styles.icon} />
        </Badge>
      </div>

      <FavoriteModal
        isOpen={isOpen}
        toggleModal={toggleOpen}
      />
    </>
  );
}