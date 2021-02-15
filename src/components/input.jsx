import React from 'react';

export const Input = (props) => {
    let { className, labelClass, label, ...others } = props;
    return (
        <div>
            {label && <div className={`font-ubuntu fs-16 lh-18 font-ubuntu ml-12 ${labelClass}`} >{label}</div>}
            <input className={`input font-ubuntu ${className}`} {...others} />
        </div>
    );
};