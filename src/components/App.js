import React, { useState } from 'react';
import video from "../data/video.js";
import Comments from "./Comments";
import Likes from "./Likes";


function App() {
  console.log("Here's your data:", video);

  const [like, setLike] = useState(9210)
  const [notLike, setNotLike] = useState(185)
  // const [comment, hideComment] = useState(true)
  const [comments, setComments] = useState(true)



  function handleLike(){
    console.log({CURRENT : like})
    setLike(like + 1)
  }

  function handleNotLike(){
    setNotLike(notLike + 1)
  }

// function handleCount(like){

// }

 


 

  const videoComments = video.comments

  const videoTitle = video.title

  const videoViews = video.views 
  const videoCreation = video.createdAt

  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      
      <Likes handleLike={handleLike} like={like} notLike={notLike}  videoViews={videoViews} videoCreation ={videoCreation} videoTitle={videoTitle} handleNotLike={handleNotLike}/>
      <Comments videoComments={videoComments} />
    </div>
  );
}

export default App;
