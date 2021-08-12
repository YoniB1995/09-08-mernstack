import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

it('Home component renders without crashing',()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Home name="jacob" />,div);
    expect(div.innerHTML).toEqual('<div><h1>Hello There : jacob </h1></div>')
})
it('Home component crashing',()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Home/>,div);
    expect(div.innerHTML).toEqual('<div><h1>Hello There : </h1></div>')
})
// it('Home component crashing',()=> {
//     const div = document.createElement('div');
//     ReactDOM.render(<Home/>,div);
//     expect(div.innerHTML).toEqual('<div><h1>Hello There : </h1></div>')
// })