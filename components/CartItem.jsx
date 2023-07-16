import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const CartItem = ({item}) => {

  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch.remove(item.id);
    toast.success("Item removed successfully");
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image}></img>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <div onClick={removeFromCart}>
        <FcDeleteDatabase/>
        </div>
      </div>
    </div>
  )
};

export default CartItem