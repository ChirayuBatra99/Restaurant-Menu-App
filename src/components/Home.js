import React, {useState} from 'react'
import Cardsdata from './CardData'
import {useDispatch} from "react-redux";
import { addToCart } from '../redux/features/cartSlice';
import styles from './Home.module.scss'
import {toast ,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

 const Home=()=> {
    const dispatch = useDispatch();
    const [cardData, setCardData]= useState(Cardsdata);

    const send=(e)=>{
        dispatch(addToCart(e))
        toast("Item added successfully")
    }

  return (
    <div className={styles.gridBox}>
      {Cardsdata.map((key, index)=>{ 
        return(

             <div className={styles.content} >
              <img className={styles.imgData} src={key.imgdata}/> <br/>
              <p> <b>{key.dish}</b>  <br/> 
             {key.address} <br/>
             {key.price} <br/>
             {key.rating} star <br/> </p>
             <button className={styles.buttonCSS} onClick={()=>send(key)}>Add to Cart</button> <br/>
             <ToastContainer/>

             </div>

        )
      })
      }
      
    </div>
  )
}


export default Home