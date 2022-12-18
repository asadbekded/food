import { Input } from '../Input/Input';
import './selectedDishes.css';
import Pizzaa from '../../assets/images/food4.svg';

export const SelectedDishes = () => {
  return (
    <>
     <form className='selectedd-content'>
      <ul className='selectedd-list'>
         <li className='selectedd-item'>
            <div>
               <div className='spice-box'>
                  <img src={Pizzaa} alt='pizza img' width={40} height={40}/>
                  <div>
                     <p>Spicy seasoned sea...</p>
                     <ins>$ 2.29</ins>
                  </div>
                  <div>
                    <button>1</button>
                    <ins>$ 4,58</ins>
                  </div>
               </div>
               <div>
                 <Input type='text' placeholder='Please, just a little bit spicy only.'/>
                 <button>Send</button>
               </div>
            </div>
         </li>
      </ul>
    </form>
   </>
  )
}