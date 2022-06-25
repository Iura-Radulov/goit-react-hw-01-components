import s from "./Profile.module.css";
import React from "react";
import PropTypes from "prop-types";

const Profile = ({username, tag, location, avatar, stats:{followers, views, likes} }) => (
    <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt={username}
      className={s.avatar}
            />
            <div className={s.descriptionText}>
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
                </div>
  </div>

  <ul className={s.stats}>
    <li className={s.statsList}>
        <span className={s.label}>Followers</span>
      <span className={s.quantity}> {followers}</span>
    </li>
    <li className={s.statsList}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{ views}</span>
    </li>
    <li className={s.statsList}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{ likes}</span>
    </li>
  </ul>
</div>    
)

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}

export default Profile