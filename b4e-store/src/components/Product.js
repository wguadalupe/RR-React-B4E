function Product({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>${data.price}</p>
            <p>{data.category}</p>
            {/*product detail placeholder*/}
        </div>
    );
}

export default Product;