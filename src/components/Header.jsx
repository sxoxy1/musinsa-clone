import "../styles/header.css"
import { Link } from "react-router-dom";

//Hear = 사이트 맨 위 상단 영역
function Header(){
    return(
        <header className="header">
            {/* 왼쪽 로고 */}
           <Link to="/" className="header-logo-link">
            <div className="header-logo">MUSIT</div>
           </Link>
            {/* 가운데 메뉴 */}
            <nav className="header-nav">
                <Link to="/products" className="header-menu">추천</Link>
                <Link to="/products" className="header-menu">상의</Link>
                <Link to="/products" className="header-menu">하의</Link>
                <Link to="/products" className="header-menu">신발</Link>
                <Link to="/products" className="header-menu">가방</Link>
            </nav>
            {/* 오른쪽 유저 메뉴 */}
            <div className="header-user-menu">
                <span className="header-user-item">로그인</span>
                <span className="header-user-item">찜</span>
                <span className="header-user-item">장바구니</span>
            </div>
        </header>
    );
}

export default Header;