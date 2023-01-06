import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import { AddNewDishes } from '../AddNewDishes';
// import { DishCard } from '../DishCard';
import './HotDishes.css';
// import { Watch } from 'react-loader-spinner';


export const HotDishes = () => {
   // const [form, setForm] = useState(false);
   const [hots, setHots] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/food/1')
         .then(res => setHots(res.data))
         .catch(err => console.log(err))
   }, [])

   return (
      <>
         {
            hots.length ? (
               <ul className='dish-list'>
                  {/* <li className='add__item'>
                      <button onClick={() => setForm(true)} className='add__btn'>Add Dishes</button>
                      {
                         form && (
                            <AddNewDishes form={form} setForm={setForm} />
                         )
                      }
                   </li> */}

                  {
                     hots.map(el => (
                        <li className='dish-item'>
                           <img className='dish-img' src={`http://localhost:5000/${el.image}`} alt='img' width={132} height={132} />
                           <div className='dish-box'>
                           <h3 className='dish-title'>{el.name}</h3>
                              <span className='dish-cur'>{el.price}</span>
                              <p className='dish-text'>{el.bowls}</p>
                           </div>
                        </li>
                     ))
                  }
               </ul>

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

