import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  const {cartItems,total,amount} = useSelector((store)=>store.cart);

  if(amount < 0){
    return (
      <section className='cart'>
        <h2>Your Cart </h2>
        <h3 className='empty-cart'> is empty</h3>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2 >Your Bag</h2>
        <div>
          {cartItems.map((item)=>{
           return <CartItem key={item.id} {...item}/>;
          })}
        </div>
      </header>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>clear cart</button>
      </footer>
    </section>
  );
}

export default CartContainer;