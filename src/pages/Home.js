import { useEffect, useState } from "react";
// import { products } from "../data";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function Home(){
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProduct(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const products = await res.json();
            setPosts(products);
            console.log(products);
        }
        catch(error){
            console.log("Error in fetching data");
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    return (
        
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 " >
            {
                loading? (<Spinner/>)
                :
                (posts.length>0?

                    (posts.map((post)=>(
                        < Product post={post} key={post.id} />
                    )))
                    :
                    <p>No posts found</p>
                )
            }
        </div>
    )
}
export default Home;