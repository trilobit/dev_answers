import React, {Component} from 'react';
import answers from '../answerBase';
import Overlay from './Overlay';
import Answer from './Answer';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            index: this.getIndex(false),
        };
    }

    getIndex(isRandom = true) {
        let index;

        if(!window.location.hash || isRandom) {
            index = parseInt(Math.random() * answers.length, 10);
        } else {
            index = parseInt(window.location.hash.substr(1), 10);
        }

        return index;
    }

    render() {
        return (
            <div>
                <Overlay clickHandler = { this.handleClick } />
                <Answer answer = { answers[this.state.index] } />
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            index: this.getIndex()
        });
    }

}

export default App;
