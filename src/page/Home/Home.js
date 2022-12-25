import { FoodFilter, HomeHeader, SelectedDishes, Sidebar } from '../../components';
import { Orders } from '../../components/Orders';
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
          <HomeHeader />
          <FoodFilter />
        </div>
        <div className='content__orders'>
          <PricebarHeader />
          <SelectedDishes />
        </div>
      </div>
    </>
  )
}
