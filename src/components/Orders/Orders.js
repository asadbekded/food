import "./Orders.css"
import Qari from '../../assets/images/table/qari.svg'

export const Orders = () => {
    const Table = [
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        },
        {
            title: "Eren Jaegar",
            body: "Spicy seasoned seafood noodles ",
            price: "$125",
            isComplated: "Completed"
        }
    ]
    return (
        <>
            <div className="report">
                <div className="report__titleBox">
                    <h3 className="report__title">Order Report</h3>
                    <button className='report__btn' type='button'>Filter Order</button>
                </div>
                <table className="report__table table">
                    <tr className="table__tr">
                        <th className="table__td">
                            Customer
                        </th>
                        <th className="table__td">
                            Menu
                        </th>
                        <th className="table__td">
                            Total Payment
                        </th>
                        <th className="table__td">
                            Status
                        </th>
                    </tr>
                    <div className="scroll__box">
                    {Table.map((el) => (
                        <>
                            <tbody className="table__tbody">
                                <td className="table__tbody__td">
                                    <img src={Qari} alt="" width='42' />
                                    {el.title}
                                </td>
                                <td className="table__tbody__td">
                                    {el.body}
                                </td>
                                <td className="table__tbody__td">
                                    {el.price}
                                </td>
                                <td className="table__tbody__td actives">
                                    {el.isComplated}
                                </td>
                            </tbody>
                        </>
                    ))}
                    </div>
                </table>
            </div>
        </>
    )
}
