import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

export default function CartItem({item}){
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Removed from Cart");
    };
    function truncateText(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }

    return(
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">

        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center" >
            <div className="w-[30%]" >
                <img className="object-cover " src ={item.image}/>
            </div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]" >
                    <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                    <p className="text-base text-slate-700 font-medium">{truncateText(item.description,15)}</p>
                    
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg text-green-600">${item.price}</p>
                    <div className="bg-red-200 group text-red-700 hover:bg-red-400 hover:text-white transition-transform duration-300 
                    cursor-pointer rounded-full p-3 mr-3" 
                    onClick={removeFromCart} >
                        <MdDelete />
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}