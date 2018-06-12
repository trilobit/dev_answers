import React from 'react';

const Answer = ({answer, theme}) => (
    <div className={`Answer Answer_${theme}`}>
        <div className="Answer__logo"/>
        <h2 dangerouslySetInnerHTML={{__html: answer.text}}/>
        <div className="Answer__copyright">{answer.name}</div>
    </div>
);

export default Answer;
