import React from "react";

const styles = {
  Container: {
    width: "100%",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  },
  List: { listStyle: "none", padding: 0 },
};

export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article style={{ ...styles.Container, background }}>
      <h2>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} width={128} height={128} />
      <p>Specification: </p>
      <ul style={styles.List}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (from ${product.price})
        </button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p style={{ fontSize: "14px", color: "lightsalmon" }}>Not available</p>
  );

  const availableTemplate = (
    <p style={{ fontSize: "14px", color: "lightgreen" }}>
      {stockCount} items available
    </p>
  );
  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}
