import { useDispatch } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../feature/cartSlice';
import {ChevronUp,ChevronDown} from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn'
        onClick={()=>dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn'
        onClick={()=>dispatch(increaseItem({ id }))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'
        onClick={()=>{
          if(amount===1){
            dispatch(removeItem(id));
            return
          }
          dispatch(decreaseItem({id}))}}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem