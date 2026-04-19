//Home 재사용

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>전체 상품</h1>

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
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
};

export default Products;