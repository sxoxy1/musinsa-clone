// 상품 카드 하나
function ProductCard(props){
    return(
        <div style={StyleSheet.card}>
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
        flwxDirection: "coloumn",
        gap: "8px",
    },
    image: {
        width: "100%",
        height: "280px",
        objectFit: "cover",
        backgroundColor: "#f5f5f5",
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