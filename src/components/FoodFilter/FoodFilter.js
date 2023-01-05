import { NavLink, Route, Routes } from 'react-router-dom';
import { Appetizer } from '../Appetizer';
import { Desert } from '../Desert';
import { DishCard } from '../DishCard';
import { Grill } from '../Grill';
import { ColdDishes } from '../ColdDishes';
import { Soup } from '../Soup';
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
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to='/desert'>
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
         <div>
            <Routes>
               <Route inde element={<DishCard />} />
               <Route path="cold-dishes" element={<ColdDishes />} />
               <Route path="soup" element={<Soup />} />
               <Route path="grill" element={<Grill />} />
               <Route path="appetizer" element={<Appetizer />} />
               <Route path="dessert" element={<Desert />} />
            </Routes>
         </div>
      </>
   )
}
