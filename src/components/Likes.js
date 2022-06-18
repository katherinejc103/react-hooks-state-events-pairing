import React from 'react';

function Likes({handleLike, like, videoTitle, videoCreation, videoViews, notLike, handleNotLike}){

    return (
        <div>
        <h1>{videoTitle}</h1>
        <div>
            {videoViews} Views | Uploaded {videoCreation}
        </div>
    
            <button onClick={handleLike}>
            {like}👍
            </button>
            <button onClick={handleNotLike}>
            {notLike}👎
            </button>
        </div>
    )
}



export default Likes;