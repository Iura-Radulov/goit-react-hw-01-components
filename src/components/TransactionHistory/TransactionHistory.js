import React from "react";
import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <>
            <table className={s.transactionHistory}>
            <thead className={s.thead}>
                <tr>
                <th className={s.theadItem}>Type</th>
                <th className={s.theadItem}>Amount</th>
                <th className={s.theadItem}>Currency</th>
                </tr>
            </thead>

                <tbody className={s.tbody}>
                    {items.map(({id, type, amount, currency}) => (
                        <tr key={id} className={s.tbodyRow}>
                           <td className={s.tbodyItem}>{type}</td>
                            <td className={s.tbodyItem}>{amount}</td>
                            <td className={s.tbodyItem}>{currency}</td>
                </tr>
                    ))}                
                
            </tbody>
            </table>
        </>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}

export default TransactionHistory