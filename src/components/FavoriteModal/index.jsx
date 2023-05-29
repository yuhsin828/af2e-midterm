import { Modal } from "antd";
import { Link } from "react-router-dom";
import { useUserInfo, useProductsByFavorites } from "../../react-query";
import ProductList from "../ProductList";

export default function FavoriteModal({ isOpen, toggleModal }) {
    const handleCancel = () => toggleModal(!isOpen);

    const { data: userInfo } = useUserInfo();
    const { data, isLoading } = useProductsByFavorites(userInfo.uid);
    const products = data || [{ id: 1 }, { id: 2 }];

    return (
        <Modal
            title="我的收藏"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
        >
            {(!userInfo?.name)
                ? (
                    <div>
                        請先<Link to="/auth/login?redirect=/auth/profile">登入</Link>
                    </div>
                ) : (!userInfo?.favorites[0])
                    ? (
                        <div>您還沒有收藏商品，快去逛逛吧！</div>
                    ) : (
                        <ProductList products={products} isLoading={isLoading} />
                    )}
        </Modal>
    );
}