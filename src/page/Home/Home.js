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
      </div>
      <div className='content__orders'>
        <PricebarHeader />
        <SelectedDishes />
        <PricebarFooter />
      </div>

    </>
  )
}
