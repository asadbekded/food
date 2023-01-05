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
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} end to="/settings/product-management">
                     Hot Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/product-management/coldDishes">
                     Cold Dishes
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/product-management/soup">
                     Soup
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/product-management/grill">
                     Grill
                  </NavLink>
               </li>
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/product-management/appetizer">
                     Appetizer
                  </NavLink>
               </li >
               <li className='product-item'>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/product-management/dessert">
                     Dessert
                  </NavLink>
               </li >
            </ul >
         </header >
         <div>
            <Routes>
               <Route path='product-management/' element={<AddDishes />} />
               <Route path="/coldDishes" element={<AddDishes />} />
               <Route path="/soup" element={<AddDishes />} />
               <Route path="/grill" element={<AddDishes />} />
               <Route path="/appetizer" element={<AddDishes />} />
               <Route path="/dessert" element={<AddDishes />} />
               <Route path="/coldDishes" element={<AddDishes />} />
               <Route path="/soup" element={<AddDishes />} />
               <Route path="/grill" element={<AddDishes />} />
               <Route path="/appetizer" element={<AddDishes />} />
               <Route path="/dessert" element={<AddDishes />} />
            </Routes>
         </div>
      </>
   )
}
