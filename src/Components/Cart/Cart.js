import './Cart.css';
import Math from '../Math/Math';



const Cart = (props) => {
    const {cart} = props;

    let myName = '';
    for(const myProduct of cart){
      myName = myName + myProduct.name;
    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p className='cart-item'>
            <p className='cart-name'>{myName}</p>
            </p>
            <p><button className='btn-choose-one'>Choose One</button></p>
            <div>
               <Math></Math>
            </div>


            <p><button className='btn-choose-one'>Choose Again</button></p>
        </div>
    );
};

export default Cart;