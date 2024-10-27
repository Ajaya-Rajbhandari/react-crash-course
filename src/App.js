import "./App.css";
import { ProductCard } from "./component/ProductCard";
import iphone from "./img/iphone.png";
import watch from "./img/watch.png";
import mac from "./img/notebook.png";
import { ProductList } from "./component/ProductList";
function App() {
  const products = [
    {
      imgSrc: iphone,
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 299,
    },
    {
      imgSrc: watch,
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size  ",
        "Always-On Ratina display",
        "Up to 29 hours video playback",
      ],
      price: 249,
    },
    {
      imgSrc: mac,
      title: "Macbook Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 2399,
    },
  ];
  function handlePurchase(product) {
    alert(`You Clicked on Product which cost $${product.price}`);
  }
  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onPurchase={handlePurchase}
          />
        ))}
      </ProductList>
      <h2>Products which cost upto $2500</h2>
      <ul>
        {products
          .filter(({ price }) => price < 500)
          .map(({ title, price }) => (
            <li>
              {title} - ${price}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
