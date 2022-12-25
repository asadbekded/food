import { useState } from "react";
import { Modal } from "../Modal";
import "./PricebarFooter.css";

export const PricebarFooter = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="res">
                <div className="res__discount">
                    Discount
                    <span className="res__discountRes">$0</span>
                </div>
                <div className="res__total">
                    Sub total
                    <span className="res__totalRes"> $ 21,03</span>
                </div>
                <button type="button" onClick={() => setModal(true)} className="res__btn">Continue to Payment</button>
                {
                    modal && <Modal modal={modal} setModal={setModal} />
                }
            </div>
        </>
    )
}
