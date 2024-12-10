// Products Section
import first from "../assets/images/one.jpg";
import second from "../assets/images/two.jpg";
import third from "../assets/images/three.jpg";
function Products() {
  return (
    <div className="productsContainer">
      <div className="productBox">
        <img src={first} alt="perfumes"></img>
        <p>Fogg Wood Extreme, Eau De<br /> Parfum, Long-lasting Perfume,<br />100ml</p>
      </div>
      <div className="productBox">
        <img src={second} alt="perfumes"></img>
        <p>Fogg Wood Extreme,Eau De <br />Parfum, Long-lasting Perfume,<br />100ml</p>
      </div>
      <div className="productBox">
        <img src={third} alt="perfumes"></img>
        <p>Designer Club-Be Spoke by<br />Premium Long Lasting Perfume,<br />100ml</p>
      </div>
    </div>
  )
}
export default Products
