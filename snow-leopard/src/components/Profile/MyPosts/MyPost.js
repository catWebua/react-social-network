import React from 'react';
import p from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={p.content}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi, how are you?" like="15"/>
            <Post message="It's my first post" like="20"/>
        </div>
    );
};

export default MyPost;
