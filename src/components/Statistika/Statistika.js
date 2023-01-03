import './Statistika.css';
import Dollar from '../../assets/images/statistic.icon.svg';
import Strelka from '../../assets/images/static.icon2.svg';
import User from '../../assets/images/statistic.user.svg';
import Izob from '../../assets/images/statistic.izob.svg';
import Fox from '../../assets/images/statistic.3.svg';

export const Statistika = () => {
  return (
    <ul className='static-list'>
      <li className='static-item'>
         <div className='static-box'>
           <img className='static-img' src={Dollar} alt='' width={38} height={38}/>
           <span className='static-cur'>+32.40%</span>
           <img className='static-img' src={Strelka} alt='' width={18} height={18}/>
         </div>
         <h2 className='static-title'>$10,243.00</h2>
         <p className='static-text'>Total Revenue</p>
      </li>
      <li className='static-item'>
         <div className='static-box'>
           <img className='static-img' src={Izob} alt='' width={38} height={38}/>
           <span className='static-cur static-en'>-12.40%</span>
           <img className='static-img' src={Strelka} alt='' width={18} height={18}/>
         </div>
         <h2 className='static-title'>23,456</h2>
         <p className='static-text'>Total Dish Ordered</p>
      </li>
      <li className='static-item'>
         <div className='static-box'>
           <img className='static-img' src={User} alt='' width={38} height={38}/>
           <span className='static-cur'>+2.40%</span>
           <img className='static-img' src={Fox} alt='' width={18} height={18}/>
         </div>
         <h2 className='static-title'>1,234</h2>
         <p className='static-text'>Total Customer</p>
      </li>
    </ul>
  )
}
