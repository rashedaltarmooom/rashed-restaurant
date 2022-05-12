import productsList from "../products";
import ProductItem from "./ProductItem"

const ProductList = () => {
    return (
      <div class="product-list">
        {productsList.map((item) => {
          return (
            <div class="item">
              <ProductItem
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    );
  };
  export default ProductList;
  