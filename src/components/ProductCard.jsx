// 상품 카드 하나
function ProductCard(props){
    return(
        <div style={StyleSheet.card}>
            {/* 상품 이름 */}
            <h3>{props.name}</h3>

            {/* 가격 */}
            <p>{props.price}원</p>
        </div>
    );
}

//스타일
const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "20px",
        width: "200px"
    },
};

export default ProductCard;