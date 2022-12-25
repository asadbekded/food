<<<<<<< HEAD
import { FoodFilter, HomeHeader, SelectedDishes, Sidebar } from '../../components';
=======
import { FoodFilter, HomeHeader, PricebarFooter, SelectedDishes, Sidebar } from '../../components';
>>>>>>> 983cd9c61b9727772a7102bffe2e835b6d8ebc67
import { PricebarHeader } from '../../components/PricebarHeader';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className='content'>
        <div className='content__sidebar'>
          <Sidebar />
        </div>
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
      </div>
    </>
  )
}
