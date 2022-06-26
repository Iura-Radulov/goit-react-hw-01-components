import React from "react";
import PropTypes from "prop-types";
import s from './Friendlist.module.css';
import FriendListItem from "./FriendListItem";


const FriendList = ({ friends }) => {   
    return (
        <>
            <ul className={s.friendList}>
                 {friends.map(friend => (
                    <FriendListItem key={ friend.id} friend={ friend}/>
        ))}                
        </ul>
        </>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
    })).isRequired
}

export default FriendList