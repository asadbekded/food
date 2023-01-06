import { NavLink } from 'react-router-dom';
import './FoodFilter.css';
// import PuffLoader from 'react-spinners/PuffLoader'

export const FoodFilter = () => {
   return (
      <>
         <header className='foodfilter-header'>
            <ul className='foodfilter-list'>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/'>
                     Hot Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/cold-dishes'>
                     Cold Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/soup'>
                     Soup
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/grill'>
                     Grill
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/appetizer'>
                     Appetizer
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/dessert'>
                     Dessert
                  </NavLink>
               </li>
            </ul>
            <div className='food-box'>
               <h2 className='foodfilter-title'>Choose Dishes</h2>
               <select className='food-sel'>
                  <option value="DineIn">Dine In</option>
                  <option value="ToGo">To Go</option>
                  <option value="Delivery">Delivery</option>
               </select>
            </div>
         </header>
      </>
   )
}
