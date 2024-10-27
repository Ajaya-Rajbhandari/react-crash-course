import React from "react";

export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article
      style={{
        background,
        width: "100%",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} width={128} height={128} />
      <p>Specification: </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <button onClick={() => onPurchase(product)}>
        Buy (from ${product.price})
      </button>
    </article>
  );
}
