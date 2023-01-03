import { FoodFilter, HomeHeader, PricebarFooter, SelectedDishes } from '../../components';
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
