import React, {Component} from 'react';
import answers from '../answerBase';
import THEMES from '../themes';
import Overlay from './Overlay';
import Answer from './Answer';
import SwitchTheme from './SwitchTheme';

const THEME_KEY = 'theme';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            theme: window.localStorage.getItem(THEME_KEY) || THEMES.light,
            index: this.getIndex(false)
        });
    }

    handleOverlayClick = () => {
        this.setState({
            index: this.getIndex()
        });
    };

    handleSwitchThemeClick = () => {
        const currentTheme = this.state.theme === THEMES.light ? THEMES.dark : THEMES.light;

        window.localStorage.setItem(THEME_KEY, currentTheme);

        this.setState({
            theme: currentTheme
        });
    };

    getIndex(isRandom = true) {
        let index;

        if (!window.location.hash || isRandom) {
            index = parseInt(Math.random() * answers.length, 10);
        } else {
            index = parseInt(window.location.hash.substr(1), 10);
        }

        return index;
    }

    render() {
        return (
            <div className={`App App_${this.state.theme}`}>
                <Overlay clickHandler={this.handleOverlayClick}/>
                <Answer answer={answers[this.state.index]}
                        theme={this.state.theme}
                />

                <div className="App__actions">
                    <SwitchTheme
                        clickHandler={this.handleSwitchThemeClick}
                        theme={this.state.theme}
                    />
                </div>
            </div>
        );
    }
}

export default App;
