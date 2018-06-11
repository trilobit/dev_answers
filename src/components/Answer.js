import React from 'react';

const Answer = ({answer}) => (
    <div className="content">
        <div className="logo"/>
        <h2 dangerouslySetInnerHTML={{__html: answer.text}}/>
        <div className="copyright">{answer.name}</div>
    </div>
);

export default Answer;
