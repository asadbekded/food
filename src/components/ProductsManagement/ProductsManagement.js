import './ProductsManagement.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { Appetizer, ColdDishes, Grill, Soup, Dessert } from '../../components';
import { AddDishes } from '../../components';


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
               <Route index element={<AddDishes />} />
               <Route path="/coldDishes" element={<ColdDishes />} />
               <Route path="/soup" element={<Soup />} />
               <Route path="/grill" element={<Grill />} />
               <Route path="/appetizer" element={<Appetizer />} />
               <Route path="/dessert" element={<Dessert />} />
            </Routes >
         </div >
      </>
   )
}
