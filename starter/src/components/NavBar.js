import { useSelector } from 'react-redux';
import {CartIcon} from '../icons';

const NavBar = () => {
    const {cartItems} = useSelector((store)=>store.cart);
  return (
    <nav>
        <div className='nav-center'>
            <h1> Reedux Toolkit</h1>
        <div className='nav-container'>
            <CartIcon/>
            <div className='amount-container'>
                <p className='total-amount'>{cartItems.length}</p>
            </div>
        </div>
        </div> 
    </nav>
  )
}

export default NavBar