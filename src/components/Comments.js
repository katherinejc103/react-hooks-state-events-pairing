import React, { useState } from 'react';

function Comments({videoComments}){

const [isHidden, setIsHidden] = useState(false)

    console.log(videoComments)
    const allComments = videoComments.map(obj => <li>{obj.user} 
    {obj.comment}</li>)
 
 function hideComments() {
    setIsHidden(!isHidden)
  }  
    
    return(
        <div>
            <button onClick={hideComments}>Hide Comments
           </button>
           {isHidden == false ? allComments : null} 
        </div>
    )
}




export default Comments;