import { Badge, theme, message } from "antd";
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
    <>
      {contextHolder}
      <div onClick={(!userInfo?.name) ? (info) : (toggleOpen)} className={styles.favorite}>
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