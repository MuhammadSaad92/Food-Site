import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3
      ${activeCart ? "translate-x-0" : "translate-x-full"} 
        transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-1 border-gray-600 text-gray-600 font-bold
            p-1 text-xl rounded-md hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? cartItems.map((food) => {
          return <ItemCart 
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    img={food.img}
                    qty={food.qty}
                  />
        }) : <h1 className="text-center text-xl font-bold text-gray-500 mt-10">Your Cart is Empty</h1>}

        <div className="absolute bottom-0">
          <h3 className="font-bold text-gray-800">Items : {totalQty} </h3>
          <h3 className="font-bold text-gray-800">Total Amount : {totalPrice} </h3>
          <hr className="text-gray-300 w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={()=> navigate("/Success")}
            className="bg-green-500 text-white font-bold px-3 py-2
            rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <IoCartSharp
        onClick={() => setActiveCart(!activeCart)}
        className={` rounded-full bg-white shadow-md text-5xl p-3
        fixed bottom-4 right-4 ${ totalQty > 0 && "animate-bounce delay-500 transition-all"} `}
      />
    </>
  );
};

export default Cart;
