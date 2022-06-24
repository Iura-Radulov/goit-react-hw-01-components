import React from "react";
import PropTypes from "prop-types";
import s from './Friendlist.module.css';

const FriendList = ({ friends }) => {   
    return (
        <>
        <ul className={s.friendList}>
                {friends.map(friend => (
                    <li key={ friend.id} className={s.item}>
                        <span className={ friend.isOnline ? s.onLine : s.offLine }></span>
                    <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{friend.name }</p>
                    </li>
            ))}
        </ul>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}

export default FriendList