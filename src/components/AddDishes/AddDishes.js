import './AddDishes.css';
import Pizza from '../../assets/images/AddDishes/Image 1.svg';

export const AddDishes = () => {
    return (
        <>
            <div className='add'>
                <ul className='add__list'>
                    <li className='add__item'>
                        <button className='add__btn'>Add Dishes</button>
                    </li>
                    <li className='dishes__item'>
                        <div className='dishes__box'>
                            <img className='dishes__img' src={Pizza} width='127' height='127' alt="" />
                            <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
                            <div className='dishes__cost'>
                                <span className='dishes__price'>$ 2.29</span>
                                <span className='dishes__bowl'>20 Bowls</span>
                            </div>
                        </div>
                        <div className='dishes__edit'>
                            <button className='dishes__editBtn'>Edit dish</button>
                        </div>
                    </li>
                    <li className='dishes__item'>
                        <div className='dishes__box'>
                            <img className='dishes__img' src={Pizza} width='127' height='127' alt="" />
                            <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
                            <div className='dishes__cost'>
                                <span className='dishes__price'>$ 2.29</span>
                                <span className='dishes__bowl'>20 Bowls</span>
                            </div>
                        </div>
                        <div className='dishes__edit'>
                            <button className='dishes__editBtn'>Edit dish</button>
                        </div>
                    </li>
                    <li className='dishes__item'>
                        <div className='dishes__box'>
                            <img className='dishes__img' src={Pizza} width='127' height='127' alt="" />
                            <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
                            <div className='dishes__cost'>
                                <span className='dishes__price'>$ 2.29</span>
                                <span className='dishes__bowl'>20 Bowls</span>
                            </div>
                        </div>
                        <div className='dishes__edit'>
                            <button className='dishes__editBtn'>Edit dish</button>
                        </div>
                    </li>
                    <li className='dishes__item'>
                        <div className='dishes__box'>
                            <img className='dishes__img' src={Pizza} width='127' height='127' alt="" />
                            <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
                            <div className='dishes__cost'>
                                <span className='dishes__price'>$ 2.29</span>
                                <span className='dishes__bowl'>20 Bowls</span>
                            </div>
                        </div>
                        <div className='dishes__edit'>
                            <button className='dishes__editBtn'>Edit dish</button>
                        </div>
                    </li>
                    <li className='dishes__item'>
                        <div className='dishes__box'>
                            <img className='dishes__img' src={Pizza} width='127' height='127' alt="" />
                            <h4 className='dishes__title'>Spicy seasoned br seafood noodles</h4>
                            <div className='dishes__cost'>
                                <span className='dishes__price'>$ 2.29</span>
                                <span className='dishes__bowl'>20 Bowls</span>
                            </div>
                        </div>
                        <div className='dishes__edit'>
                            <button className='dishes__editBtn'>Edit dish</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
