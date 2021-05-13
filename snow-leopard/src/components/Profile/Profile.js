import React from 'react';
import p from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return(
        <div >
            <div className={p.contentImg}>
                <img src="https://vjoy.cc/wp-content/uploads/2019/07/1.jpeg" alt="image"/>
            </div>
            <div>
                ava+info
            </div>
            <MyPost />
        </div>
    );
};

export default Profile;
