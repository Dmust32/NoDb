import React from 'react';

const Comments = ({comments}) => {
    return (
    <div>
       {comments.map( comment =>{
           return <p>{comment}</p>
       }

       )}
    </div>
    )}

export default Comments