import React from 'react';


class Card extends React.Component{
    render(){
        return(
            <div className="github-profile" style={{margin: 5}}>
                <img src={this.props.avatar_url} alt="user avatar"/>
                <div className="info">
                    <div className="info">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;