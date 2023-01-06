import './DishCard.css';

export const DishCard = ({ children }) => {
  return (
    <div className='add'>
      <ul className='add__list'>
        {children}
      </ul>
    </div>
  )
}
