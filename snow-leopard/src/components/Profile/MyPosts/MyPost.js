import React from 'react';
import p from './MyPost.module.css';

const MyPost = () => {
    return(
        <div className={p.content}>
            My posts
            <div>
                New posts
            </div>
            <div className={p.posts}>
                <h4 className={p.item}>Post1</h4>
            </div>
            <div className={p.posts}>
                <h4 className={p.item}>Post2</h4>
            </div>
        </div>
    );
};

export default MyPost;
