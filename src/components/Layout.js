import React from 'react';

const Column = (props) => (<div className={`col ${props.className ? props.className : ''}`}>{props.children}</div>);
const Row = (props) => (<div className={`row ${props.className ? props.className : ''}`}>{props.children}</div>);

export { Column, Row };
