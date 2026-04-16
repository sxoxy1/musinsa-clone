//Home = 메인 화면
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Home(){
    return (
        <div>
            {/* 메인 배너 */}
            <div style={styles.banner}>
                <h1 style={styles.title}>2026 SUMMER</h1>
                <p style={styles.subtitle}>지금 가장 인기 있는 스타일</p>
            </div>
            {/* 인기 상품 영역 */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>인기상품</h2>
                
                <div style={styles.productList}>
                    {products.map((item)=>(  //products 배열 안에 있는걸 하나씩 꺼내서 아래 코드 실행
                        <ProductCard //카드 하나 생성
                        key={item.id} //고유값
                        brand={item.brand}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        />
                    ))}
                </div>
            </div>
            {/* 스타일 추천 섹션 (나중에 필터/추천 기능 들어갈 자리) */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>스타일 추천</h2>
                <p style={styles.sectionText}>미니멀, 스트릿, 캐주얼 등 나눠서 보여줄 예정</p>
            </div>
        </div>
    );
}

const styles = {
    banner: {
        height: "320px",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex", //가로정렬
        flexDirection: "column", //세로 배피
        justifyContent: "center", //세로 가운데
        alignItem: "center", //가로 가운데
    },
    title: {
        fontSize: "40px",
        fontWeight: "bold",
        margin: 0,
    },
    section: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    sectionText: {
        fontSize: "15px",
        color: "#666",
    },
    productList: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
    },
};

export default Home;