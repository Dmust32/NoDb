import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';


class CommentButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }

    createComment = (id) =>{
        axios({
            method:'PUT',
            url: `http://localhost:5050/api/comments/${id}`,
            data: {
                comment: this.state.comment
            }
        }).then(response => {
            this.props.updateState(response.data)
        })
    }

    handleInputChange = e => {
        this.setState({comment: e.target.value})
    }
    


    render(){
        return(
            <div>
                <input value={this.state.comment} onChange={this.handleInputChange}/>
                <button onClick = {() => {this.createComment(this.props.pic.id)}} >Comment</button>
                < Comments comments={this.props.pic.comments} />
            </div>
        )
    }
}

export default CommentButton;