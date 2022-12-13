import { useRef } from 'react';
import { Input } from '../Input/Input';
import './modal.css';

export const Modal = () => {

   const nameRef = useRef()

   const handleFormSubmit = (evt) => {
      evt.preventDefault()
      console.log(nameRef.current.value);
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
               <Input ref={nameRef} placeholder="Name"/>
               <button type='submit'>Send</button>
            </form>
         </div>
      </div>
    </div>
  )
}
