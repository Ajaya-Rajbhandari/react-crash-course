import "./App.css";
import { ProductCard } from "./component/ProductCard";
import iphone from "./img/iphone.png";
import { ProductList } from "./component/ProductList";
function App() {
  const product = {
    imgSrc: iphone,
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };
  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductList>
    </div>
  );
}

export default App;
