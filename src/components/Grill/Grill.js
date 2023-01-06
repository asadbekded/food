import axios from 'axios';
// import { useState } from 'react';
import { useEffect } from 'react';
import './Grill.css';

export const Grill = () => {
   // const [grill, setGrill] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/food/4')
         .then((res) => console.log(res))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <li className='dishes__item'>
            <div className='dishes__box'>
               <img className='dishes__img' width='127' height='127' alt="" />
               <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
               <div className='dishes__cost'>
                  <span className='dishes__price'>$ 2.29</span>
                  <span className='dishes__bowl'>20 Bowls</span>
               </div>
            </div>
            <div className='dishes__edit'>
               <button className='dishes__editBtn'>Edit dish</button>
            </div>
         </li>
      </>
   )
}
