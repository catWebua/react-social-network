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
            <Post message="Hi, how are you?"/>
            <Post message="It's my first post"/>
        </div>
    );
};

export default MyPost;
