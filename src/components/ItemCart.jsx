import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty} from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCart = ({ id, img, name, qty, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2">
      <AiFillDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed From Cart`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 mt-1 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold mt-3">Rs {price}</span>
          <div className="flex justify-center item-center absolute gap-2 right-7 mb-3 mt-3">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-1 border-gray-600 text-gray-600
             hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1
              text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-1 border-gray-600 text-gray-600
             hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 
              text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
