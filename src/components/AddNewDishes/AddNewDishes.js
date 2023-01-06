import { Input } from '../Input/Input';
import './AddNewDishes.css';
import Download from "../../assets/images/AddNewDIshes/Download.png";
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';

export const AddNewDishes = ({ form, setForm }) => {

    const productName = useRef()
    const productBowls = useRef()
    const productPrice = useRef()
    const productSel = useRef()
    const [image, setImage] = useState('');

    async function handleAddProduct(evt) {
        evt.preventDefault()

        const data = new FormData();

        data.append('name', productName.current.value);
        data.append('price', productBowls.current.value);
        data.append('bowls', productPrice.current.value);
        data.append('category_id', productSel.current.value);
        data.append('food_img', image, image.name);

        return await axios({
            method: 'post',
            url: 'http://localhost:5000/food',
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(res => {
                if (res.status === 200) {
                    setForm(false)
                }
                console.log(res.data);
            })
            .catch((err) => console.log(err));
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
                            <option defaultValue="Product category">Product category</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <div>
                            <input onChange={(evt) => setImage(evt.target.files[0])} type='file' className='newDishes__download' />
                            <img className='down' src={Download} alt="Download" width='36' height='36' />
                            <h4 className='newDishes__downloadTitle'>Click or drag file to this area to upload</h4>
                            <h4 className='newDishes__downloadText'>Support for a single or bulk upload.</h4>
                        </div>
                        <div className='modalbtn-box'>
                            <button className='exit-btn' onClick={() => setForm(false)} type='button'>Cancel</button>
                            <button onClick={handleAddProduct} className='modal-btn' type='submit'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
