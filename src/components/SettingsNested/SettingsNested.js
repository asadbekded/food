import './SettingsNested.css';
import { NavLink } from 'react-router-dom';

export const SettingsNested = () => {
  return (
    <>
      <ul className='nested-list'>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/appereance'>
            <h3 className='nested-title'>Appereance</h3>
            <p className='nested-text'>Dark and Light mode, Font size</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/your-restaurant'>
            <h3 className='nested-title'>Your Restaurant</h3>
            <p className='nested-text'>Dark and Light mode, Font size</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/product-management'>
            <h3 className='nested-title'>Products Management</h3>
            <p className='nested-text'>Manage your product, pricing, etc</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/notifications'>
            <h3 className='nested-title'>Notifications</h3>
            <p className='nested-text'>Customize your notifications</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/security'>
            <h3 className='nested-title'>Security</h3>
            <p className='nested-text'>Configure Password, PIN, etc</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/about-management'>
            <h3 className='nested-title'>About Management</h3>
            <p className='nested-text'>Manage your product, pricing, etc</p>
          </NavLink>
        </li>
        <li className='nested-item'>
          <NavLink className={({ isActive }) => (isActive ? 'nestedhov' : 'nested-link')} to='/settings/about-us'>
            <h3 className='nested-title'>About Us</h3>
            <p className='nested-text'>Find out more about Posly</p>
          </NavLink>
        </li>
      </ul>
    </>
  )
}
