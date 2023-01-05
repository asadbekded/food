import { Route, Routes } from 'react-router-dom';
import { Appetizer, ColdDishes, Desert, DishCard, FoodFilter, Grill, HomeHeader, PricebarFooter, SelectedDishes, Soup } from '../../components';
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
          <Route index element={<DishCard />} />
          <Route path="/coldDishes" element={<h2>Cold dishes menu</h2>} />
          <Route path="/soup" element={<h2>Soup menu</h2>} />
          <Route path="/grill" element={<h2>Grill menu</h2>} />
          <Route path="/appetizer" element={<h2>Appetizer menu</h2>} />
          <Route path="/dessert" element={<h2>Dessert menu</h2>} />
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
