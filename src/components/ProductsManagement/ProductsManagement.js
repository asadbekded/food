import './ProductsManagement.css';
import { NavLink } from "react-router-dom";

export const ProductsManagement = () => {
   return (
      <>
         <header className='product-header'>
            <div className='ptoductheader-top'>
               <h1 className='product-title'>Products Management</h1>
               <button className='product-btn' type='button'>Manage Categories</button>
            </div>
            <ul className='product-list'>
               <li className='product-item' style={{ padding: "0 0 13px 0", borderBottom: "3px solid #EA7C69" }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/" style={{ color: "#ea7c69" }} >
                     Hot Dishes
                  </NavLink>
               </li>
               <li className='product-item' style={{ padding: "0 0 13px 0", }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/coldDishes">
                     Cold Dishes
                  </NavLink>
               </li>
               <li className='product-item' style={{ padding: "0 0 13px 0", }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/soup">
                     Soup
                  </NavLink>
               </li>
               <li className='product-item' style={{ padding: "0 0 13px 0", }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/grill">
                     Grill
                  </NavLink>
               </li>
               <li className='product-item' style={{ padding: "0 0 13px 0", }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/appetizer">
                     Appetizer
                  </NavLink>
               </li >
               <li className='product-item' style={{ padding: "0 0 13px 0", }}>
                  <NavLink className={({ isActive }) => isActive ? "product-act" : "product-link"} to="/settings/dessert">
                     Dessert
                  </NavLink>
               </li >
            </ul >
         </header >
      </>
   )
}
