import { Input } from '../Input/Input';
import './AddNewDishes.css';
import Download from "../../assets/images/AddNewDIshes/Download.png";
import { useRef } from 'react';

export const AddNewDishes = ({ form, setForm }) => {

    const productName = useRef()
    const productBowls = useRef()
    const productPrice = useRef()
    const productSel = useRef()

    const handleAddProduct = (evt) => {
        evt.preventDefault()

        console.log(productName.current.value);
        console.log(productBowls.current.value);
        console.log(productPrice.current.value);
        console.log(productSel.current.value);
    }

    return (
        <>
            <div className='newDishes__pos'>
                <div className='newDishes__box'>
                    <h3 className='newDIshes__title'>Add new product item to list</h3>
                    <form className='newDishes__form' onSubmit={handleAddProduct}>
                        <Input ref={productName} className="newDishes__input" type="text" placeholder="Product name" name="name" />
                        <Input ref={productBowls} className="newDishes__input" type="text" placeholder="Product bowls" name="bowls" />
                        <Input ref={productPrice} className="newDishes__input" type="number" placeholder="Product price" name="price" />
                        <select ref={productSel} className='newDishes__input'>
                            <option disabled selected>Product category</option>
                            <option value="Cold Dishes">Cold Dishes</option>
                            <option value="Soup">Soup</option>
                            <option value="Grill">Grill</option>
                            <option value="Appetizer">Appetizer</option>
                            <option value="Dessert">Dessert</option>
                        </select>
                        <button className='newDishes__download'>
                            <img src={Download} alt="Download" width='36' height='36' />
                            <h4 className='newDishes__downloadTitle'>Click or drag file to this area to upload</h4>
                            <h4 className='newDishes__downloadText'>Support for a single or bulk upload.</h4>
                        </button>
                        <div className='modalbtn-box'>
                            <button className='exit-btn' onClick={() => setForm(false)} type='button'>Cancel</button>
                            <button className='modal-btn' type='submit'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
