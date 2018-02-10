import React from 'react';

const Comments = ({comments}) => {
    return (
        <div className="comments">
            {comments ?
                comments.map( comment =>{
                return <p>{comment}</p>
            }): null}
    </div>
    )}

export default Comments