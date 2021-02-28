import React from 'react';

class Conditional extends React.Component{
    render(){
        return(
            <div style={{color: Math.random() <0.5 ? 'green' : 'red'}}>
                Look at me now. I change colors.
            </div>
        )
    }
}

export default Conditional;

//class component 