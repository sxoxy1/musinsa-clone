import { useParams } from "react-router-dom";
import products from "../data/products";

//상품 상세 페이지
function ProductDetail() {
    const {id} = useParams(); //주소에서 id 가져오기
    const product = products.find((item) => item.id === Number(id)); //id에 맞는 상품 찾기, 주소에서 가져온건 글자라서 숫자로 바꿈
    
    //상품이 없을 때
    if(!product) {
        return <div style={StyleSheet.container}>상품을 찾을 수 없습니다</div>
    }

    return(
        <div style={StyleSheet.container}>
            {/* 상품 이미지 */}
            <img src={product.image} alt={product.name} style={StyleSheet.image}/>

            {/* 상품 정보 */}
            <div style={styles.info}>
                <p style={styles.brand}>{product.breand}</p>
                <h1 style={styles.name}>{product.name}</h1>
                <p style={styles.price}>{product.price.toLocaleString()}원</p>
                <p style={styles.desc}>이 상품은 상세페이지 연습용 임시 설명------</p>
            </div>
        </div>
    );
}


const styles = {
    container: {
        display: "flex",
        gap: "40px",
        padding: "40px",
    },
    image: {
        wigth: "360px",
        height: "440px",
        objectFit: "cover",
        backgroundColor: "#f5f5f5",
    },
    info: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    brand: {
        fonrSize: "16px",
        fontWeight: "bold",
        margin: 0,
    },
    name: {
        fontSize: "28px",
        margin: 0,
    },
    price: {
        fontSize: "24px",
        fontWeight: "bold",
        margin: 0,
    },
    desc: {
        fontSize: "15px",
        color: "#666"
    },
};

export default ProductDetail;