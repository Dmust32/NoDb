import React, {Component} from 'react';
import Button from './Button';

class Newsletter extends Component {
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
    let email = this.state.email;
    let list = this.state.email_List;
    list.push(email);
    console.log(list);

    this.setState({email_List: list });
    console.log(this.state.email_List)
}



render(){
    return(
        <div>

        <input onChange = {(event) => {this.updateEmail(event.target.value)}} type='text' placeholder='Input Email'/>
        < Button update={this.updateEmail_List} />

        </div>
    )
    
};


}

export default Newsletter;