import logo from "./logo.svg";
import "./App.css";
import products from "./products.js"

function Product(props){
return(
  <div class= "product-name">
  <img class= "product-image" src={props.image}/>
  <h5>{props.name}</h5>
  <h5>{props.price}</h5>
    </div>
)
}

function App() {
  const items = products.map((product) => (
  <Product name={product.name} 
  price={product.price} 
  image={product.image} />));

  return (
    <div className="App">
      <h1>what lyric?</h1>
      <h4> bits and beats</h4>
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
        alt=""
      />
      <div className="product-list">
    {items}
    </div>
    </div>
  );
}

export default App;
