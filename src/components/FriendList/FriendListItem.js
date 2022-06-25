import React from "react";
import PropTypes from "prop-types";
import s from './Friendlist.module.css';

const FriendListItem = ({ friends }) => {
    return (
    <>
        {friends.map(friend => (
                    <li key={ friend.id} className={s.item}>
                        <span className={ friend.isOnline ? s.onLine : s.offLine }></span>
                    <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{friend.name }</p>
                    </li>
        ))}
    </>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendListItem