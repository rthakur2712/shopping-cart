import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function NavBar(){
    const cart = useSelector((state)=>state.cart);
    return(
        <div className="bg-slate-900 w-full" >
            <div className=" flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900" >
                <NavLink to="/" >
                    <div className="h-14" >
                        <img className="h-full" src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="ecomzy"/>
                    </div>
                </NavLink>
                <div 
                    className="flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium"  >
                    <NavLink className="cursor-pointer hover:text-green-400 transition duration-300 ease-in" to="/">Home</NavLink>
                    <NavLink to="/cart"
                    className="relative cursor-pointer hover:text-green-400 transition duration-100 ease-in">
                        <FaShoppingCart size={28} />
                        {
                            cart.length>0?
                            (<div className="absolute bg-green-600 text-xs w-5 h-5 flex
                            justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                               {cart.length}
                           </div>):
                            (<div></div>)
                        }
                        
                    </NavLink>
                </div>

            </div>
        </div>
    )
}
export default NavBar;