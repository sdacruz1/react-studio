// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
    return (
        <div>
            <h2>Name: {props.item.name}</h2>
            <br></br>
            <img src={props.item.image}></img>
            <br></br>
            <p>{props.item.description}.</p>
            <h3>Price: ${props.item.price}</h3>
            <button onClick={() => props.addToCart(props.item)}>Add to Cart</button>
            <br></br>
        </div>
    )
}

export default BakeryItem;
