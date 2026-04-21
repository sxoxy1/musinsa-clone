//Home = 메인 화면
import "../styles/home.css"
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Home(){
    return (
        <div>
            {/* 메인 배너 */}
            <div className="home-banner">
                <h1 className="home-title">2026 SUMMER</h1>
                <p className="home-subtitle">지금 가장 인기 있는 스타일</p>
            </div>
            {/* 인기 상품 영역 */}
            <div className="home-section">
                <h2 className="home-section-title">인기상품</h2>
                
                <div className="home-product-list">
                    {products.map((item)=>(  //products 배열 안에 있는걸 하나씩 꺼내서 아래 코드 실행
                        <ProductCard //카드 하나 생성
                            key={item.id} //고유값
                            id={item.id}
                            brand={item.brand}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            {/* 스타일 추천 섹션 (나중에 필터/추천 기능 들어갈 자리) */}
            <div className="home-section">
                <h2 className="home-section-title">스타일 추천</h2>
                <p className="home-section-text">미니멀, 스트릿, 캐주얼 등 나눠서 보여줄 예정</p>
            </div>
        </div>
    );
}

export default Home;