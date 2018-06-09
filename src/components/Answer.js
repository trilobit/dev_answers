import React, {Component} from 'react';

class Answer extends Component {
    render() {
        const {answer} = this.props;
        return (
            <div className="content">
                <div className="logo" />
                <h2 dangerouslySetInnerHTML={{ __html: answer.text }} />
                <div className="copyright">{ answer.name }</div>
            </div>
        );
    }
}

export default Answer;
