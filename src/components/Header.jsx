import { Link } from "react-router-dom";

//Hear = 사이트 맨 위 상단 영역
function Header(){
    return(
        <header style={styles.header}>
            {/* 왼쪽 로고 */}
            <div style={styles.logo}>MUSIT</div>

            {/* 가운데 메뉴 */}
            <nav style={styles.nav}>
                <Link to="/products" style={styles.menu}>추천</Link>
                <Link to="/products" style={styles.menu}>상의</Link>
                <Link to="/products" style={styles.menu}>하의</Link>
                <Link to="/products" style={styles.menu}>신발</Link>
                <Link to="/products" style={styles.menu}>가방</Link>
            </nav>
            {/* 오른쪽 유저 메뉴 */}
            <div style={styles.userMenu}>
                <span style={styles.userItem}>로그인</span>
                <span style={styles.userItem}>찜</span>
                <span style={styles.userItem}>장바구니</span>
            </div>
        </header>
    );
}

//간단한 스타일 모음
const styles ={
    header: {
        display: "flex", //가로 정렬
        justifyContent: "space-between",
        alignItems: "center", //세로 가운데 정렬
        padding: "20px 40px",
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#ffffff",
    },
    logo: {
        fontSize: "28px",
        fontWeight: "bold",
    },
    nav: {
        display: "flex",
        gap: "24px", //메뉴 간격
    },
    menu: {
        fontSize: "16px",
        cursor: "pointer", //마우스 포인트
    },
    userMenu: {
        display: "flex",
        gap: "16px",
    },
    userItem: {
        fontSize: "14px",
        cursor: "pointer",
    },
};

export default Header;