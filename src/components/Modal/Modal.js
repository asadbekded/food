import { useRef } from 'react';
import { Input } from '../Input/Input';
import './modal.css';

export const Modal = ({ modal, setModal }) => {

   const nameRef = useRef()
   const phoneRef = useRef()
   const dateRef = useRef()
   const passwordRef = useRef()
   const selRef = useRef()
   const numRef = useRef()


   const handleFormSubmit = (evt) => {
      evt.preventDefault()
      console.log(nameRef.current.value);
      console.log(phoneRef.current.value);
      console.log(dateRef.current.value);
      console.log(passwordRef.current.value);
      console.log(selRef.current.value);
      console.log(numRef.current.value);
   }

   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <div className="modal-header">
               <h2 className='modal-title'>Payment</h2>
               <p className='modal-text'>3 payment method available</p>
            </div>
            <div className="modal-main">
               <h3 className='payme-title'>Payment Method</h3>
               <ul className='payme-list'>
                  <li className='payme-item'>
                     <p className='payme-text'>Credit Card</p>
                  </li>
                  <li className='payme-item'>
                     <p className='payme-text'>Paypal</p>
                  </li>
                  <li className='payme-item'>
                     <p className='payme-text'>Cash</p>
                  </li>
               </ul>

               <form onSubmit={handleFormSubmit}>
                  <div className='form-content'>
                     <label className='modal-label' for='card_name'>Cardholder Name</label>
                     <Input type='text' className='modal-inp' id='card_name' name='card_name' ref={nameRef} />
                  </div>
                  <div className='form-content'>
                     <label className='modal-label' for='card_num'>Card Number</label>
                     <Input type='tel' defaultValue='+998' className='modal-inp' id='card_num' name='card_number' ref={phoneRef} />
                  </div>
                  <div className='date-box'>
                     <div className='form-content hero-date'>
                        <label className='modal-label' for='card_date'>Expiration Date</label>
                        <Input type='date' className='modal-inp' id='card_date' name='card_date' ref={dateRef} />
                     </div>
                     <div className='form-content'>
                        <label className='modal-label' for='card_pass'>CVV</label>
                        <Input type='password' className='modal-inp' id='card_pass' name='card_password' ref={passwordRef} />
                     </div>
                  </div>
                  <div className='sel-box'>
                     <div className='form-content'>
                        <label className='modal-label' for='card_order'>Order Type</label>
                        <select id='card_order' name='card_order' className='modal-sel' ref={selRef}>
                           <option value="DineIn">Dine In</option>
                           <option value="ToGo">To Go</option>
                           <option value="Delivery">Delivery</option>
                        </select>
                     </div>
                     <div className='form-content'>
                        <label className='modal-label' for='card_table'>Table no.</label>
                        <Input type='number' className='modal-inp' id='card_table' name='card_table' ref={numRef} />
                     </div>
                  </div>

                  <div className='modalbtn-box'>
                     <button className='exit-btn' onClick={() => setModal(false)} type='button'>Cancel</button>
                     <button className='modal-btn' type='submit'>Confirm Payment</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}
