import React from 'react';
import style from './Error.module.css';

const Error = ({text}) => (
    <div className={style.Error}>{text}</div>
);

export default Error;