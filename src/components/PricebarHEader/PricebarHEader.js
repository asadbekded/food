import { NavLink } from "react-router-dom";
import "./PricebarHeader.css";

export const PricebarHeader = () => {
    return (
        <>
            <div className="orders">
                <h3 className="orders__title">Orders #34562</h3>
                <div className="orders__boxLink">
                    <NavLink to='/dine' className={({ isActive }) => isActive ? "orders__active orders__link" : "orders__link"}>Dine In</NavLink>
                    <NavLink to='/togo' className={({ isActive }) => isActive ? "orders__active orders__link" : "orders__link"}>To Go</NavLink>
                    <NavLink to='/delivery' className={({ isActive }) => isActive ? "orders__active orders__link" : "orders__link"}>Delivery</NavLink>
                </div>
            </div>
        </>
    )
}
