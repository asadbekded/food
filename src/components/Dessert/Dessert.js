import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import './Dessert.css';



export const Dessert = () => {
   const [dessert, setDessert] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/food/6')
         .then(res => setDessert(res.data))
         .catch(err => console.log(err))
   }, [dessert])

   return (
      <>
         {
            dessert.length ? (
               <ul className='dish-list'>
                  {
                     dessert.map(el => (
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
                  <Watch
                     className="loading"
                     height="80"
                     width="80"
                     radius="48"
                     color="#EA7C69FF"
                     ariaLabel="watch-loading"
                     wrapperStyle={{}}
                     wrapperClassName=""
                     visible={true}
                  />
                  <div />
               </div>
            )
         }
      </>
   )
}

