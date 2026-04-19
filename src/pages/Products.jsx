//Home 재사용
// 상품 목록 페이지
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
    //현재 선택된 카테고리 저장
    //값을 바꾸는 함수 = setSelectedCategory
    //처음 값 = "전체"
    const [selectedCategory, setSelectedCategory] = useState("전체");

    //선택된 카테고리에 따라 상품 걸러주기
    //전체 = 다 보여줌
    //아니면 카테고리 같은 것만 남김
    const filteredProducts =
    selectedCategory === "전체"
        ? products
        : products.filter((item) => item.category === selectedCategory);
   
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>전체 상품</h1>
        {/* 카테고리 버튼*/}
        <div style={styles.categoryBar}>
            <button
               style={
                selectedCategory === "전체"
                ? styles.activeCategoryButton
                : styles.categoryButton
               }
               onClick={() => setSelectedCategory("전체")}
            >
                전체
            </button>
            <button
               style={
                selectedCategory === "상의"
                ? styles.activeCategoryButton
                : styles.categoryButton
               }
               onClick={() => setSelectedCategory("상의")}
            >
                상의
            </button>
            <button
               style={
                selectedCategory === "하의"
                ? styles.activeCategoryButton
                : styles.categoryButton
               }
               onClick={() => setSelectedCategory("하의")}
            >
                하의
            </button>
            <button
               style={
                selectedCategory === "신발"
                ? styles.activeCategoryButton
                : styles.categoryButton
               }
               onClick={() => setSelectedCategory("신발")}
            >
                신발
            </button>
            <button
               style={
                selectedCategory === "가방"
                ? styles.activeCategoryButton
                : styles.categoryButton
               }
               onClick={() => setSelectedCategory("가방")}
            >
                가방
            </button>
        </div>
        {/* 선택된 카테고리 표시 */}
        <p style={styles.categoryText}>
            현재 선택: {selectedCategory}
        </p>
        {/* 상품 목록 */}
        <div style={styles.productList}>
            {filteredProducts.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            ))}
      </div>
    </div>
    );
}

const styles = {
  container: {
    padding: "40px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  categoryBar: {
    display: "flex",
    gap: "12px",
    marginButton: "30px",
  },
  categoryButton: {
    padding: "10px 16px",
    border: "1px solid #ddd",
    backGroundColor: "#fff",
    curor: "pointer",
  },
  activeCategoryButton: {
    padding: "10px 16px",
    border: "1px solid #000",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },
  categoryText: {
    marginBottom: "20px",
    color: "#666",
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
};

export default Products;