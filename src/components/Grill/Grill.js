import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import './Grill.css'



export const Grill = () => {
   const [grill, setGrill] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/food/4')
         .then(res => setGrill(res.data))
         .catch(err => console.log(err))
   }, [grill])

   return (
      <>
         {
            grill.length ? (
               <ul className='dish-list'>
                  {
                     grill.map(el => (
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

