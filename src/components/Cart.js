import React,{useState, useEffect} from 'react'
import { addToCart, removeSingleIteams, removeToCart, emptycartIteam } from '../redux/features/cartSlice'
import {useDispatch, useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const dispatch= useDispatch();
    const [price, setPrice]= useState(0);
    const {carts}= useSelector((state)=> state.allCart);
    
    const emptyCart=()=>{
        dispatch(emptycartIteam());
        toast("Cart emptied");
    }

    const total=()=>{
        let totalPrice=0;
        carts.map((data, index)=>{
            totalPrice= data.price * data.qnty +totalPrice;
        })
        setPrice(totalPrice);
    }

    const decreaseItem=(e)=>{
            dispatch(removeSingleIteams(e));
    }

    const increaseItem=(e)=>{
            dispatch(addToCart(e))
    }

    useEffect(()=>{
        total()
    }, [total])
    

  return (
    <div>
        <button onClick={emptyCart}>Empty Cart</button>
        <thead>
            <tr>
                <th>Action___</th>
                <th>Product___</th>
                <th>Name___</th>
                <th>Price___</th>
                <th>Qty___</th>
                <th>Total_Amount</th>
            </tr>
        </thead>
        
        <tbody>
            {
                carts.map((data, index)=>{
                    return(
                        <>
                            <tr>
                                <td>na</td>
                                {/* <td><img src={data.imgdata} /></td> */}
                                <td>img</td>
                                <td>{data.dish}</td>
                                <td>{data.price}</td>
                                <td> <button onClick={()=>decreaseItem(data)}>-</button>{data.qnty} <button onClick={()=>increaseItem(data)}>+</button></td>
                                <td>{data.qnty * data.price}</td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
            <h3>total: {price}</h3>
            <ToastContainer/>
    </div>
  )
}

export default Cart;