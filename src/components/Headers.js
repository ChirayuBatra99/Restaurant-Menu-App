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
        <div className={styles.header}>
        <div>
            <button className={styles.buttonCart} onClick={goToCart}>🛒</button>
        </div>
        <p> Items in cart : {carts.length} </p> 
        </div>
    </div>
  )
}

export default Headers;