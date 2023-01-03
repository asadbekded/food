// import { Route, Routes } from 'react-router-dom';
import { AddDishes, ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
import './Setting.css';

export const Settings = () => {
  return (
    <div className='setingpag__content'>
     <div className='setingpage__topheader'><SettingsHeader/></div>
     <div className='setingpage__section'>
      <SettingsNested/>

      <div className='setingpage__dishesbox'>
        <ProductsManagement/>
        <AddDishes/>
      </div>
     </div>
    </div>
  )
};
