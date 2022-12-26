import { Input } from '../Input/Input';
import './selectedDishes.css';
import Pizzaa from '../../assets/images/food4.svg';
import Del from '../../assets/images/Trash.svg';

export const SelectedDishes = () => {
   return (
      <>
         <form className='selectedd-content'>
         <div className='selectedd-content'>
            <ul className='selectedd-list'>
               <li className='selectedd-item'>
                  <div className='spice-content'>
                     <div className='spice-box'>
                        <div className='spice-allBox'>
                           <img src={Pizzaa} alt='pizza img' width={40} height={40} />
                           <div className='fill-box'>
                              <p className='spice-text'>Spicy seasoned sea...</p>
                              <ins className='spice-ins'>$ 2.29</ins>
                           </div>
                        </div>
                        <div>
                           <button className='spice-num'>1</button>
                           <ins className='spice-price'>$ 4,58</ins>
                        </div>
                     </div>
                     <div className='spicehero-box'>
                        <Input className="spice-inp" type='text' placeholder='Please, just a little bit spicy only.' />
                        <button className='spicedel-btn'><img src={Del} alt='delete img' width={20} height={20} /></button>
                     </div>
                  </div>
               </li>
               <li className='selectedd-item'>
                  <div className='spice-content'>
                     <div className='spice-box'>
                        <div className='spice-allBox'>
                           <img src={Pizzaa} alt='pizza img' width={40} height={40} />
                           <div className='fill-box'>
                              <p className='spice-text'>Spicy seasoned sea...</p>
                              <ins className='spice-ins'>$ 2.29</ins>
                           </div>
                        </div>
                        <div>
                           <button className='spice-num'>1</button>
                           <ins className='spice-price'>$ 4,58</ins>
                        </div>
                     </div>
                     <div className='spicehero-box'>
                        <Input className="spice-inp" type='text' placeholder='Please, just a little bit spicy only.' />
                        <button className='spicedel-btn'><img src={Del} alt='delete img' width={20} height={20} /></button>
                     </div>
                  </div>
               </li>
               <li className='selectedd-item'>
                  <div className='spice-content'>
                     <div className='spice-box'>
                        <div className='spice-allBox'>
                           <img src={Pizzaa} alt='pizza img' width={40} height={40} />
                           <div className='fill-box'>
                              <p className='spice-text'>Spicy seasoned sea...</p>
                              <ins className='spice-ins'>$ 2.29</ins>
                           </div>
                        </div>
                        <div>
                           <button className='spice-num'>1</button>
                           <ins className='spice-price'>$ 4,58</ins>
                        </div>
                     </div>
                     <div className='spicehero-box'>
                        <Input className="spice-inp" type='text' placeholder='Please, just a little bit spicy only.' />
                        <button className='spicedel-btn'><img src={Del} alt='delete img' width={20} height={20} /></button>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
         </form>
      </>
   )
}