import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './Itemlist';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const emptyCart = () => {
        dispatch(clearCart());
    }
  return (
    <div className='m-4 p-4 text-center'>
        <h1>Cart</h1>
        {items.length == 0 ? <h1>Add Items to Cart</h1> : <button onClick={emptyCart}>clear cart</button>}
        <div className='w-50'>
            <ItemList item={items} />
        </div>
    </div>
  )
}

export default Cart;