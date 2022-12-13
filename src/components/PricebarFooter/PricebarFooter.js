import "./PricebarFooter.css";

export const PricebarFooter = () => {
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
                <button className="res__btn">Continue to Payment</button>
            </div>
        </>
    )
}
