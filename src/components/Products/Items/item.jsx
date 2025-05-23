function Item({ products }) {
  return;
  <ul>
    {products.map((product, index) => (
      <li key={index}>{product}</li>
    ))}
  </ul>;
}
