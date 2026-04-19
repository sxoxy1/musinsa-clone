//Home 재사용
// 상품 목록 페이지
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>전체 상품</h1>
        {/* 카테고리 바*/}
        <div style={styles.categoryBar}>
            <button style={styles.categoryButton}>전체</button>
            <button style={styles.categoryButton}>상의</button>
            <button style={styles.categoryButton}>하의</button>
            <button style={styles.categoryButton}>신발</button>
            <button style={styles.categoryButton}>가방</button>
        </div>

        <div style={styles.productList}>
            {products.map((item) => (
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
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
};

export default Products;