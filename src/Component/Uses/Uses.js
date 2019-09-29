import React from 'react';
import './style.css';

const Uses = (props) => {
    return (
        <React.Fragment>
            <div className="blogprogress">
                <span>{props.val.title}</span>
                <progress value={props.val.percentage_value} max="1000">
                <p>{props.val.percentage_value}</p>%
                </progress>
            </div>
        </React.Fragment>
    )
}

export default Uses;