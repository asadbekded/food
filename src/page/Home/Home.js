import { Route, Routes } from 'react-router-dom';
import { Appetizer, ColdDishes, Dessert, FoodFilter, Grill, HomeHeader, HotDishes, PricebarFooter, SelectedDishes, Soup } from '../../components';
import { PricebarHeader } from '../../components/PricebarHeader';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className='content__resto'>
        <div className='homeFixed'>
          <HomeHeader />
        </div>
        <FoodFilter />
        <Routes>
          <Route index element={<HotDishes />} />
          <Route path="/cold-dishes" element={<ColdDishes />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/grill" element={<Grill />} />
          <Route path="/appetizer" element={<Appetizer />} />
          <Route path="/dessert" element={<Dessert />} />
        </Routes>
      </div>
      <div className='content__orders'>
        <PricebarHeader />
        <SelectedDishes />
        <PricebarFooter />
      </div>

    </>
  )
}