import React from "react";
import PropTypes from "prop-types";
import s from './Friendlist.module.css';
import FriendListItem from "./FriendListItem";


const FriendList = ({ friends }) => {   
    return (
        <>
        <ul className={s.friendList}>
                <FriendListItem friends={ friends}/>
        </ul>
        </>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList