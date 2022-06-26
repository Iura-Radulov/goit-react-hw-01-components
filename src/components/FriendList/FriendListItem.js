import React from "react";
import PropTypes from "prop-types";
import s from './Friendlist.module.css';

const FriendListItem = ({ friend }) => {
    const { isOnline, avatar, name } = friend;
    return (    
            <li className={s.item}>
                <span className={ isOnline ? s.onLine : s.offLine }></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name }</p>
            </li>    
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({        
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
    }).isRequired,
  
}

export default FriendListItem