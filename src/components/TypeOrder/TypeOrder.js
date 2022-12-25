import ApexChart from '../Diagramma/Diagramma';
import  './TypeOrder.css';

export const TypeOrder = () => {
  return (
    <div className='typeorder-content'>
      <div className="typeorder-header">
        <h3 className='typeorder-title'>Most Type of Order</h3>
        <select className='mostorder-sel'>
          <option value="Today" selected>Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>
      <div className='typeorder-main'>
        <ApexChart/>
        <ul className='dine-list'>
          <li className='dine-item'>
            <h4 className='dine-title'>Dine In</h4>
            <p className='dine-text'>200 customers</p>
          </li>
          <li className='dine-item'>
            <h4 className='dine-title'>To Go</h4>
            <p className='dine-text'>122 customers</p>
          </li>
          <li className='dine-item'>
            <h4 className='dine-title'>Delivery</h4>
            <p className='dine-text'>264 customers</p>
          </li>
        </ul>
      </div>
    </div>
  )
}