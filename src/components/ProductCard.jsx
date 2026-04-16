import {useNavigate} from "react-router-dom";


// 상품 카드 하나
function ProductCard(props){
    const navigate = useNavigate();
    return(
        <div
            //마우스 올리면 커짐
            style={styles.card}
            onClick={() => navigate(`/product/${props.id}`)} //클릭시 상세 페이지 이동
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            {/* 상품이미지 */}
            <img src={props.image} alt={props.name} style={styles.image}/>
            {/* 브랜드명 */}
            <p style={styles.brand}>{props.brand}</p>
            {/* 상품 이름 */}
            <h3 style={styles.name}>{props.name}</h3>
            {/* 가격 */}
            <p style={styles.price}>{props.price.toLocaleString()}원</p>
        </div>
    );
}

//스타일
const styles = {
    card: {
        width: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        cursor: "pointer", //마우스 올리면 손모양
        transition: "0.2s", //부드러운 움직임
    },
    image: {
        width: "100%",
        height: "280px",
        objectFit: "cover",
        backgroundColor: "#f5f5f5",
        transition: "0.3s",
    },
    brand: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: 0,
    },
    name : {
        fontSize: "15px",
        fintWeight: "normal",
        margin: 0,
    },
    price: {
        fontSize: "15px",
        fontWeight: "bold",
        margin: 0,
    },
};

export default ProductCard;