import React, { Component } from 'react';
import ReactDom from 'react-dom';

let Hello = () => (<h1>hello world</h1>);


ReactDom.render(<Hello/>, document.getElementById('app'));
