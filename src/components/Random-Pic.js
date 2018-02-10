import React, { Component } from 'react';
import RandomButton from './RandomButton';
import CommentButton from './CommentButton';
import axios from 'axios';
import '../App.css';

class RandomPic extends Component {
    constructor(props){
        super(props);
        this.state = {
            clownPics: [],
            randomPic: null,
            comments: false
        }
    }

    componentDidMount = () =>{
        axios({
            method: 'GET',
            url: 'http://localhost:5050/api/clownfish'
        }).then(response => {
            console.log('response', response);
            this.setState({ clownPics: response.data })
            console.log('new state', this.state.clownPics)
        });
    };

    getRandomPic = () => {
        let arr = this.state.clownPics;
        let newPic = arr[Math.floor(Math.random()*arr.length)];
        this.setState({randomPic: newPic, comments: false});
        console.log(this.state.randomPic)
    };

    updateRandomPic = (response) =>{
        this.setState({randomPic: response, comments: true})
    };

    deleteComments = (id) =>{
        axios({
            method: 'DELETE',
            url:`http://localhost:5050/api/comments/${id}`
        }).then(response => {
            this.setState({randomPic: response.data})
        })
    };

    readComments = (id) => {
        axios({
            method: 'GET',
            url:`http://localhost:5050/api/comments/${id}`
        }).then(response => {
            this.setState({randomPic: response, comments: true})
        })
    }





    render() {
        return(
            <div className = "randomizer" >
                < RandomButton update = {this.getRandomPic} />
                {this.state.randomPic ? <div>
                    <img className= "pic" src = {this.state.randomPic.image} width = "300"/>
                    {/* <button onClick= {()=>{this.readComments(this.state.randomPic.id)}}>Get Comments</button> */}
                    < CommentButton updateState={this.updateRandomPic} pic={this.state.randomPic}/>
                </div> : null}

                {this.state.comments ? <div>
                    <button className="button" onClick= {()=> {this.deleteComments(this.state.randomPic.id)}}>Delete Comments</button> 
                </div> : null}
            </div>
            
        )
    }
};

export default RandomPic

