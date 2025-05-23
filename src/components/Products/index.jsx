function Products() {
  const products = ["Product 1", "Product 2", "Product 3"];
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
