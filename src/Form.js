import axios from 'axios';
import React from 'react';

class Form extends React.Component{
    userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`http://api.github.com/users/${this.userNameInput.current.value}`);
        console.log(resp);
        this.props.onSubmit(resp.data);
        this.userNameInput.current.value ='';
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username" ref={this.userNameInput} required ></input>
                <button>Add Card</button>
            </form>
        );
    }
}

export default Form;