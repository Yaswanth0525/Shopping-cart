import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext=createContext(null);

function ShoppingCartProvider({children}){
    const [loading, setloading] = useState(true);
    const [listOfProducts,setListOfProduts]=useState([]);
    const [productDetails,setProductDetails]=useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate=useNavigate();

    async function fetchListOfProducts() {
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();
        if (result && result?.products) {
          setListOfProduts(result?.products);
          setloading(false);
        }
      }
      function handleAddToCart(singleProduct){
        // console.log("Add to cart clicked",singleProduct);
        let ExcitingData=[...cartItems];
        const findIndexOfProduct = ExcitingData.findIndex((item) => item.id === singleProduct.id);
        console.log("findIndexOfProduct",findIndexOfProduct);
        if(findIndexOfProduct===-1){
            ExcitingData.push({...singleProduct,quantity:1,totalPrice:singleProduct.price});
        }
        else{
          ExcitingData[findIndexOfProduct]={
            ...ExcitingData[findIndexOfProduct],
            quantity:ExcitingData[findIndexOfProduct].quantity+1,
            totalPrice:ExcitingData[findIndexOfProduct].price * (ExcitingData[findIndexOfProduct].quantity+1),
          }
            // console.log("ExcitingData[findIndexOfProduct].quantity",ExcitingData[findIndexOfProduct].quantity);
        }
        // console.log("Add to cart clicked",ExcitingData);
        setCartItems(ExcitingData);
        localStorage.setItem("cartItems",JSON.stringify(ExcitingData));
        navigate("/cart");

      };
      function handleViewCart(){
        navigate("/cart");
      }
      function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
          (item) => item.id === getProductDetails.id
        );
    
        if (isFullyRemoveFromCart) {
          cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
        } else {
          cpyExistingCartItems[findIndexOfCurrentCartItem] = {
            ...cpyExistingCartItems[findIndexOfCurrentCartItem],
            quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
            totalPrice:
              (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
              cpyExistingCartItems[findIndexOfCurrentCartItem].price,
          };
        }
        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        setCartItems(cpyExistingCartItems);
      }


    useEffect(()=>{
      setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
        fetchListOfProducts();
    },[])
    // console.log(listOfProducts)
    return(
         <ShoppingCartContext.Provider value={{handleViewCart,loading,setloading,listOfProducts,productDetails,isLoggedIn, setIsLoggedIn,setProductDetails,handleAddToCart,cartItems,handleRemoveFromCart}}>{children}</ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;