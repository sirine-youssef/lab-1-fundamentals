// src/components/Product.jsx
import "./Product.css"

export default function Product({ title, price, inStock, rating }) {

  // Create stars based on rating
  const stars = "⭐".repeat(Math.floor(rating))

  return (
    <div className="product-card">
      <h2>{title}</h2>

      {/* Price formatted */}
      <p className="price">${price.toFixed(2)}</p>

      {/* Stock status */}
      <p
        style={{
          color: inStock ? "green" : "red",
          fontWeight: "bold"
        }}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* Rating */}
      <p>{stars}</p>
    </div>
  )
}
