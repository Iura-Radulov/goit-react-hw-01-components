import s from "./Statistics.module.css";
import React from "react";
import PropTypes from "prop-types";

const getColor = () => {
    const string = Math.random().toString(16) + '000000'
        return string.substring(2, 8).toUpperCase()
}

const StatisticList = ({ title, stats }) => {
    return (
        <div>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.list}>
                {stats.map(item => (
                    <li key={item.id} className={s.item} style={{ backgroundColor: `#${getColor()}`}}>
                <p className={s.label}>{item.label}</p>
                <p className={s.percentage}>{item.percentage}%</p>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default StatisticList;

StatisticList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}