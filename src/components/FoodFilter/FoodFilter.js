import { NavLink, Route, Routes } from 'react-router-dom';
import './FoodFilter.css';

export const FoodFilter = () => {
  return (
   <>
   <header className='foodfilter-header'>
     <ul className='foodfilter-list'>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="hotDishes">
            Hot Dishes
           </NavLink>
        </li>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="coldDishes">
           Cold Dishes
           </NavLink>
        </li>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="soup">
           Soup
           </NavLink>
        </li>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="grill">
           Grill
           </NavLink>
        </li>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="appetizer">
           Appetizer
           </NavLink>
        </li>
        <li className='product-item'>
           <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="dessert">
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
           <Route path="hotDishes" element={<h2>Hot dishes menu</h2>}/>
           <Route path="coldDishes" element={<h2>Cold dishes menu</h2>}/>
           <Route path="soup" element={<h2>Soup menu</h2>}/>
           <Route path="grill" element={<h2>Grill menu</h2>}/>
           <Route path="appetizer" element={<h2>Appetizer menu</h2>}/>
           <Route path="dessert" element={<h2>Dessert menu</h2>}/>
        </Routes>
   </div>
   </>
  )
}
