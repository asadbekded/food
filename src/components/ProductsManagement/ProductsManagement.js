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
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings">
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
      </>
   )
}
