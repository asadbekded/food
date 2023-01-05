import './ProductsManagement.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { AddDishes } from '../AddDishes/AddDishes';

export const ProductsManagement = () => {
   return (
      <>
         <header className='product-header'>
            <div className='ptoductheader-top'>
               <h1 className='product-title'>Products Management</h1>
               <button className='product-btn' type='button'>Manage Categories</button>
            </div>
            <ul className='product-list'>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/hotDishes">
                     Hot Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/coldDishes">
                     Cold Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/soup">
                     Soup
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/grill">
                     Grill
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/appetizer">
                     Appetizer
                  </NavLink>
               </li >
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/dessert">
                     Dessert
                  </NavLink>
               </li >
            </ul >
         </header >
         <div>
         <Routes>
               <Route path='/hotDishes' element={<AddDishes />} />
               <Route path="/coldDishes" element={<h2>Cold dishes menu</h2>} />
               <Route path="/soup" element={<h2>Soup menu</h2>} />
               <Route path="/grill" element={<h2>Grill menu</h2>} />
               <Route path="/appetizer" element={<h2>Appetizer menu</h2>} />
               <Route path="/dessert" element={<h2>Dessert menu</h2>} />
            </Routes>
         </div>
      </>
   )
}
