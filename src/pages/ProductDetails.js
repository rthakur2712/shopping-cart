import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

export default function ProductDetails() {
//   const { productId } = useParams();
//   const product = useSelector((state) =>
//     state.cart.find((item) => item.id === parseInt(productId))
//   ); for cart item but we need for all items so we are gonna fetch from URL

    const location = useLocation();
    const productId = location.pathname.split("/").at(-1);
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const API_URL = `https://fakestoreapi.com/products/${productId}`;
    async function fetchProduct(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const product = await res.json();
            setProduct(product);
            console.log(product);
        }
        catch(error){
            console.log("Error in fetching data");
            setError(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProduct();
    },[productId])
    const {cart} = useSelector((state) => state); // Directly assigning the cart state
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(product));
        toast.success("Item added to cart");
    };

    const removeFromCart = () => {
        dispatch(remove(product.id));
        toast.error("Removed from Cart");
    };
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!product) {
        return <div>Product not found</div>;
      }
  return (
    
    <div className="product-detail flex gap-10 m-5 p-5">
        <Link to="/">

        <div>
            Back
        </div>
        </Link>
        <div className='w-[50%] p-5 h-[600px]'>

      <img className='h-full' src={product.image} alt={product.title} />
        </div>
        <div className='w-[50%]' >

            <h1 className="truncate w-full mt-1 text-gray-700 font-semibold text-lg  text-left">{product.title}</h1>
            <p className=" w-full text-gray-400 font-normal  text-left">{product.description}</p>
            <div className="flex items-center justify-between w-full mt-5" >

            <p className="text-green-600 font-semibold">${product.price}</p>
            </div>
            {cart.some((p) => p.id === product.id) ? (
                                <button className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide" onClick={removeFromCart}>Remove Item</button>
                            ) : (
                                <button className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide" onClick={addToCart}>Add Item</button>
                            )}
            <div>
                <p>Bika hua maal wapas nahi hoga</p>
            </div>                
        </div>
    </div>
  );
}