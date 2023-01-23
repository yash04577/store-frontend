import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import Context from './Context';




const State = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    const getAllProduct = () =>{
        return allProducts;
    }

    const getData = async () =>{
        const {data} = await axios.get("https://dummyjson.com/products")
        // const {data} = await axios.get("https://dummyjson.com/products/category/smartphones")
        console.log(data.products);
        setAllProducts(data.products)
    }


    const getSingleProduct = () =>{
        return singleProduct;
    }

    const updateSingleProduct = (product) =>{
        setSingleProduct(product);
    }


    useEffect(()=>{
        getData();
    },[])

  return (
    <Context.Provider value={{getAllProduct, getSingleProduct, updateSingleProduct}}>
        {props.children}
    </Context.Provider>
  )
}

export default State