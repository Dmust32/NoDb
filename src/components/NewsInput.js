import React, {Component} from 'react';
import Button from './Button';

class NewsInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            email_List: [],
        }
    }


updateEmail = (email) => {
    this.setState({email: email});
}

updateEmail_List = () => {

}



render(){
    return(
        <div>

        <input onChange = {(event) => {this.updateEmail(event.target.value)}} type='text' placeholder='Input Email'/>
        < Button update = {this.updateEmail_List()} />

        </div>
    )
    
};


}

export default NewsInput;