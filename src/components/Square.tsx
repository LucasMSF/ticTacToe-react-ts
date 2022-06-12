import React, { Component } from 'react'

type Props = {
    value: any,
    onClick: Function
}

type State = Props;

class Square extends Component<Props, State> {

    render() {
        return (
            <button 
            className="square" 
            onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square

