// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AddDishes, ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
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
            <Route index element={<AddDishes />} />
            <Route path="/settings/coldDishes" element={<h2>Cold dishes menu</h2>} />
            <Route path="/settings/soup" element={<h2>Soup menu</h2>} />
            <Route path="/settings/grill" element={<h2>Grill menu</h2>} />
            <Route path="/settings/appetizer" element={<h2>Appetizer menu</h2>} />
            <Route path="/settings/dessert" element={<h2>Dessert menu</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  )
};
