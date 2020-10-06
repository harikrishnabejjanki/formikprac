import React from 'react';

function TextError(props) {
    console.log('prips',props);
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError;