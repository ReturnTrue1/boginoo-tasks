import React from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom';

export const Navigation = (props) => {
    const history = useHistory();
    let { classNameRight, classNameLeft, className, link } = props;

    return (
        <div className={className} >
            <div className={classNameLeft} >ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className={classNameRight}  onClick={() => {history.push(`/${link}`)}} >Нэвтрэх</Button>
        </div>
    );
};