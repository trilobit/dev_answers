import React, {Component} from 'react';

class Overlay extends Component{
    render() {
        const {clickHandler} = this.props;
        return (
            <div className="overlay" onClick={ clickHandler } />
        );
    }
}

export default Overlay;
