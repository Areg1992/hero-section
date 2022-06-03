import React from 'react';

const Index = ({...props}) => {
    return (
        <>
            {props.link ? (
                <a href={props.link} className={`btn btn-primary ${props.fullBtn ? 'btn-block' : null}`}>
                    {props.text}
                </a>
            ):(
                <button {...props} className={`btn btn-primary ${props.fullBtn ? 'btn-block' : null}`}>
                    {props.text}
                </button>
            )}
        </>
    );
};

export default Index;