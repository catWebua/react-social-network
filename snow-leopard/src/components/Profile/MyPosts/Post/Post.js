import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_266351.png" alt=""/>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;
