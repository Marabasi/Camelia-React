import { useState, useEffect } from "react";
import { getProducts } from "../NavBar/asyncMock";
import ItemList from './Item/Item';

const ItemListContainer = ({greeting}) => {
    const [products, serProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    );
};

export default ItemListContainer;