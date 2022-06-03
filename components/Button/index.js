import React from 'react';

const Index = ({...props}) => {
    return (
        <>
            {props.link ? (
                <a href={props.link} className={`btn btn-primary ${props.fullBtn ? 'btn-block' : null}`}>
                    <span>
                        {props.text}
                    </span>
                </a>
            ):(
                <button {...props} className={`btn btn-primary ${props.fullBtn ? 'btn-block' : null}`}>
                    <span>
                        {props.text}
                    </span>
                </button>
            )}
        </>
    );
};

export default Index;