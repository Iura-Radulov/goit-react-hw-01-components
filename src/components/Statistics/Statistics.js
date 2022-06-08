import s from "./Statistics.module.css";
import React from "react";
import PropTypes from "prop-types";

const StatisticList = ({ title, stats }) => {
    return (
        <div>
            <h2 classList={s.title}>{title}</h2>
            <ul classlist={s.list}>
                {stats.map(item => (
                    <li classList={s.item}>
                <span classList={s.label}>{item.label}</span>
                <span classList={s.percentage}>{item.percentage}</span>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default StatisticList;

StatisticList.prototype = {
    data: PropTypes.array
}