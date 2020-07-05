import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { ExpansionPanelActions } from '@material-ui/core';

it("renders without crashing", ()=>{
    ReactDOM.render(<App/>,document.createElement('div'));
    const tree = 
    expect(tree).toMatchSnapshot();
}) 