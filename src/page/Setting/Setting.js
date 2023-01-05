// import { Route, Routes } from 'react-router-dom';
import { ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
import './Setting.css';

export const Settings = () => {
  return (
    <div className='setingpag__content'>
      <div className='setingpage__topheader'><SettingsHeader /></div>
      <div className='setingpage__section'>
        <SettingsNested />
        <div className='setingpage__dishesbox'>
          <ProductsManagement />
        </div>
      </div>
    </div>
  )
};
