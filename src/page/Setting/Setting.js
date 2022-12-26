// import { Route, Routes } from 'react-router-dom';
import { AddDishes, ProductsManagement, SettingsHeader, SettingsNested } from '../../components';
import './Setting.css';

export const Settings = () => {
  return (
    <div className='setingpage__content'>
     <div className='setingpage__topheader'><SettingsHeader/></div>
     <div className='setingpage__section'>
      <SettingsNested/>
      <div className='setingpage__dishesbox'>
        <ProductsManagement/>
        <AddDishes/>
        {/* <Routes>
            <Route path="/settings/hotDishes" element={<AddDishes/>}/>
            <Route path="/settings/coldDishes" element={<h2>Cold dishes menu</h2>}/>
            <Route path="soup" element={<h2>Soup menu</h2>}/>
            <Route path="grill" element={<h2>Grill menu</h2>}/>
            <Route path="appetizer" element={<h2>Appetizer menu</h2>}/>
            <Route path="dessert" element={<h2>Dessert menu</h2>}/>
         </Routes> */}
      </div>
     </div>
    </div>
  )
};
