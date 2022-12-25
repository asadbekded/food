import './MostOrder.css';
import Food from '../../assets/images/food1.svg';
import Lagman from '../../assets/images/food2.svg';
import Manti from '../../assets/images/food3.svg';

export const MostOrder = () => {
  return (
    <div className='mostorder-context'>
      <div className='mostorder-header'>
        <h3 className='mostorder-title'>Most Ordered</h3>
        <select className='mostorder-sel'>
          <option value="Today" selected>Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>

      <ul className='mostorder-list'>
        <li className='mostorder-item'>
          <img src={Food} alt='food img' width="56" height="56"/>
          <div className='most-box'>
            <h4 className='most-title'>Spicy seasoned seafood noodles</h4>
            <p className='most-text'>200 dishes ordered</p>
          </div>
        </li>
        <li className='mostorder-item'>
          <img src={Lagman} alt='food img' width="56" height="56"/>
          <div className='most-box'>
            <h4 className='most-title'>Salted pasta with mushroom sauce</h4>
            <p className='most-text'>120 dishes ordered</p>
          </div>
        </li>
        <li className='mostorder-item'>
          <img src={Manti} alt='food img' width="56" height="56"/>
          <div className='most-box'>
            <h4 className='most-title'>Beef dumpling in hot and sour soup</h4>
            <p className='most-text'>80 dishes ordered</p>
          </div>
        </li>
      </ul>
      <button className='most-btn'>View All</button>
    </div>
  )
}
