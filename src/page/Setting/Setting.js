import { Route, Routes } from 'react-router-dom';
import {  ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
import './Setting.css';

export const Settings = () => {
  return (
    <div className='setingpag__content'>
      <div className='setingpage__topheader'><SettingsHeader /></div>
      <div className='setingpage__section'>
        <SettingsNested />
        <div className='setingpage__dishesbox'>
          <Routes>
            <Route path='/appereance/*' element={<h2>Appereance</h2>} />
            <Route path="/your-restaurant/*" element={<h2>Your Restaurant</h2>} />
            <Route path="/product-management/*" element={<ProductsManagement/>} />
            <Route path="/notifications/*" element={<h2>Notifications</h2>} />
            <Route path="/security/*" element={<h2>Security</h2>} />
            <Route path="/about-management/*" element={<h2>About Management</h2>} />
            <Route path="/about-us/*" element={<h2>About Us</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  )
};
