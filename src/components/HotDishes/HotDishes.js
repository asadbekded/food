import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Watch } from 'react-loader-spinner';
import { AddNewDishes } from '../AddNewDishes';
import { DishCard } from '../DishCard';
import './HotDishes.css';

export const HotDishes = () => {
   const [form, setForm] = useState(false);
   const [hots, setHots] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/food/1')
         .then(res => setHots(res.data))
         .catch(err => console.log(err))
   }, [hots])

   return (
      <>
         {
            hots.length ? (
               <DishCard>
                  <li className='add__item'>
                     <button onClick={() => setForm(true)} className='add__btn'>Add Dishes</button>
                     {
                        form && (
                           <AddNewDishes form={form} setForm={setForm} />
                        )
                     }
                  </li>
                  {
                     hots.map(el => (
                        <li className='dishes__item'>
                           <div className='dishes__box'>
                              <img className='dishes__img' src={el.image} width='127' height='127' alt="" />
                              <h4 className='dishes__title'>{el.name}</h4>
                              <div className='dishes__cost'>
                                 <span className='dishes__price'>${el.price}</span>
                                 <span className='dishes__bowl'>{el.bowls}</span>
                              </div>
                           </div>
                           <div className='dishes__edit'>
                              <button className='dishes__editBtn'>Edit dish</button>
                           </div>
                        </li>
                     ))
                  }
               </DishCard>
            ) : (
               <div className='laoding-box'>
                  {/* <Watch
                     className="loading"
                     height="80"
                     width="80"
                     radius="48"
                     color="#EA7C69FF"
                     ariaLabel="watch-loading"
                     wrapperStyle={{}}
                     wrapperClassName=""
                     visible={true}
                  /> */}
                     <h2>Loading...</h2>
                  <div />
               </div>
            )
         }
      </>
   )
}

