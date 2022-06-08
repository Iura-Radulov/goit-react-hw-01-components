import React from "react";
import Profile from './Profile/Profile';
import user from "./Profile/user.json"
import StatisticList from "components/Statistics/Statistics"
import data from "./Statistics/data.json"


export const App = () => {
  return (    
    <div><div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats} />
      
    </div>
      <section class= "statistics">
        <StatisticList title="Upload stats" stats={data }/>
    </section>
    </div>
  );
};
