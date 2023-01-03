import './Dashbord.css';
import { DashboardHeader, MostOrder, Orders, Statistika, TypeOrder } from '../../components';

export const Dashbord = () => {
  return (
    <div className='dishes__content'>
      <div className="dishes__box">
        <DashboardHeader/>
        <Statistika/>
        <Orders/>
      </div>
      <div className='dishes__last'>
        <MostOrder/>
        <TypeOrder/>
      </div>
    </div>
  )
};
