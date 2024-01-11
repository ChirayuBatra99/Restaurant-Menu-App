import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import styles from './Headers.module.scss'
function Headers() {
    const navigate = useNavigate();
    const {carts} = useSelector((state)=>state.allCart);

    const goToCart=()=>{
        navigate('/cart');
   }

  return (
    <div className={styles.header}>
        <div className={styles.textHeader}  onClick={()=> navigate('/')}>
            Menu 
        </div>
        <div className='button-cart'>
            <button onClick={goToCart}>Cart</button>
        </div>
        <p> Items in cart : {carts.length} </p> 

    </div>
  )
}

export default Headers;