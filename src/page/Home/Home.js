import { FoodFilter, HomeHeader, PricebarFooter, SelectedDishes, Sidebar } from '../../components';
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
