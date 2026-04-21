// 상품 목록 페이지
import "../styles/products.css";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Products() {
    //현재 선택된 카테고리 저장
    //값을 바꾸는 함수 = setSelectedCategory
    //처음 값 = "전체"
    const [selectedCategory, setSelectedCategory] = useState("전체");
    
    const [sortType, setSortType] = useState("기본순");

    //선택된 카테고리에 따라 상품 걸러주기
    //전체 = 다 보여줌
    //아니면 카테고리 같은 것만 남김
    const filteredProducts =
        selectedCategory === "전체"
            ? products
            : products.filter((item) => item.category === selectedCategory);

    //원본 배열 건드리지 않고 복사 = ...filteredProducts
    const sortedProducts = [...filteredProducts];

    if (sortType === "낮은 가격순"){
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sortType === "높은 가격순"){
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    return (
        <div className="products-container">
        <h1 className="products-title">전체 상품</h1>
        {/* 카테고리 버튼*/}
        <div className="category-bar">
            <button
               className={
                selectedCategory === "전체"
                ? "active-category-button"
                : "category-button"
               }
               onClick={() => setSelectedCategory("전체")}
            >
                전체
            </button>
            <button
               className={
                selectedCategory === "상의"
                ? "active-category-button"
                : "category-button"
               }
               onClick={() => setSelectedCategory("상의")}
            >
                상의
            </button>
            <button
               className={
                selectedCategory === "하의"
                ? "active-category-button"
                : "category-button"
               }
               onClick={() => setSelectedCategory("하의")}
            >
                하의
            </button>
            <button
               className={
                selectedCategory === "신발"
                ? "active-category-button"
                : "category-button"
               }
               onClick={() => setSelectedCategory("신발")}
            >
                신발
            </button>
            <button
               className={
                selectedCategory === "가방"
                ? "active-category-button"
                : "category-button"
               }
               onClick={() => setSelectedCategory("가방")}
            >
                가방
            </button>
        </div>
        <div className="sort-bar">
            <button
                className={sortType === "기본순" ? "active-category-button" : "category-button"}
                onClick={() => setSortType("기본순")}
            >
                기본순
            </button>
            <button
                className={sortType === "낮은 가격순" ? "active-category-button" : "category-button"}
                onClick={() => setSortType("낮은 가격순")}
            >
                낮은 가격순
            </button>
            <button
                className={sortType === "높은 가격순" ? "active-category-button" : "category-button"}
                onClick={() => setSortType("높은 가격순")}
            >
                높은 가격순
            </button>
        </div>
        {/* 선택된 카테고리 표시 */}
        <p className="category-text">
            현재 선택: {selectedCategory}
        </p>
        {/* 상품 목록 */}
        {/* 걸러진 상품이 0개 인지 확인
            0개이면 문구 출력
            아니면 기존 카드 출력
         */}
        {sortedProducts.length === 0 ?(
            <p className="empty-text">해당 카테고리의 상품이 없습니다</p>
        ) : (
            <div className="products-list">
                {sortedProducts.map((item) => (
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
        )}      
    </div>
    );
}

export default Products;