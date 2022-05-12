function Product(props){
    return(
      <div class= "product-name">
      <img class= "product-image" src={props.image}/>
      <h5>{props.name}</h5>
      <h5>{props.price}</h5>
        </div>
    )
    }

export default Product;