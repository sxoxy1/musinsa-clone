//Home = 메인 화면
function Home(){
    return (
        <div>
            {/* 메인 배너 */}
            <div style={styles.banner}>
                <h1 style={styles.title}>2026 SUMMER</h1>
                <p style={styles.subtitle}>지금 가장 인기 있는 스타일</p>
            </div>
            {/* 인기 상품 섹션 (상품 카드 들어갈 자리) */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>인기상품</h2>
                <p style={styles.sectionText}>상품 카드 들어올 예정</p>
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
};

export default Home;