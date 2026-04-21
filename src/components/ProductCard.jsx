import "../styles/productCard.css";
import {useNavigate} from "react-router-dom";


// 상품 카드 하나
function ProductCard(props){
    const navigate = useNavigate();
    return(
        <div
            className="product-card"
            onClick={() => navigate(`/product/${props.id}`)}
        >
            <img src={props.image} alt={props.name} className="product-image"/>
            <p className="product-brand">{props.brand}</p>
            <p className="product-name">{props.name}</p>
            <p className="product-price">{props.price.toLocaleString()}원</p>
        </div>
    );
}

export default ProductCard;