import React, { Component } from 'react';
import RandomButton from './RandomButton';
import axios from 'axios';

class RandomPic extends Component {
    constructor(props){
        super(props);
        this.state = {
            clownPics: [],
            randomPic: ""
        }
    }

    componentDidMount = () =>{
        axios({
            method: 'GET',
            url: 'https://api.imgur.com/3/gallery/search?q=clownfish',
            headers: {
                Authorization: 'Client-ID 4cad3ba3fadfbd3'
            }
        }).then(response => {
            console.log('response', response)
            let id = 0;
            const withComment = response.data.data.map(item => {
                id++;
                item.comment = '';
                item.id = id;

                return item;
            })
            return withComment;
        }).then(newArray => {
            axios({
                method: 'POST',
                url: 'http://localhost:5050/api/clownfish',
                data: newArray.splice( 0, 10 )
            }).then(newArray => {
                console.log('this is newArray', newArray)
                this.setState({ clownPics: newArray })
            })
        })
    };

    getRandomPic = () => {
        let arr = this.state.clownPics;
        let newPic = arr[Math.floor(Math.random()*arr.length)];
        console.log(newPic);
        this.setState({randomPic: newPic.data.data.link});
        console.log(this.state.randomPic)
    }

    render() {
        return(
            <div>
                < RandomButton update = {this.getRandomPic} />

            </div>
        )
    }
};

export default RandomPic

