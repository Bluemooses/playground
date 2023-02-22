 

import React from 'react';

 

class Button extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            ...this.state

        };

    }

 

    onClickAction() {

        console.log("clicked a Button component")

    }

 

    render() {

        return (

            <button type="button" onClick={this.onClickAction}>

                {this.props.text}

            </button>

        );

    }

}

 

export default Button;