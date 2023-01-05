import { Route, Routes } from 'react-router-dom';
import { AddDishes, HotDishes, ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
import './Setting.css';

export const Settings = () => {
  return (
    <div className='setingpag__content'>
      <div className='setingpage__topheader'><SettingsHeader /></div>
      <div className='setingpage__section'>
        <SettingsNested />
        <div className='setingpage__dishesbox'>
          <ProductsManagement />
          <Routes>
            <Route index element={<HotDishes />} />
            <Route path="/appereance/*" element={<h2>appereance</h2>} />
            <Route path="/your-reustarant/*" element={<h2>Your reustarant</h2>} />
            <Route path="/product-management/*" element={<AddDishes />} />
            <Route path="/notifications/*" element={<h2>notifications</h2>} />
            <Route path="/security/*" element={<h2>security</h2>} />
            <Route path="/about-management/*" element={<h2>about-management</h2>} />
            <Route path="/about-us/*" element={<h2>About us</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  )
};
