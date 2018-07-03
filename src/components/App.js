import React, {Component} from 'react';
import answers from '../answerBase';
import THEMES from '../themes';
import Overlay from './Overlay';
import Answer from './Answer';
import SwitchTheme from './SwitchTheme';
import injectSheet from 'react-jss';

const THEME_KEY = 'theme';
const styles = {
    App: {
        transition: 'background .2s linear',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: 0,
    },
    dark: {
        backgroundColor: '#444',
    },
    actions: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    }
};

class App extends Component {
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
        const classes = this.props.classes;
        return (
            <div className={`${classes.App} ${(this.state.theme === THEMES.dark) && classes.dark}`}>
                <Overlay clickHandler={this.handleOverlayClick}/>
                <Answer answer={answers[this.state.index]}
                        light={this.state.theme === THEMES.light}
                        dark={this.state.theme === THEMES.dark}
                />

                <div className={classes.actions}>
                    <SwitchTheme
                        clickHandler={this.handleSwitchThemeClick}
                        light={this.state.theme === THEMES.light}
                        dark={this.state.theme === THEMES.dark}
                    />
                </div>
            </div>
        );
    }
}

export default injectSheet(styles)(App);
