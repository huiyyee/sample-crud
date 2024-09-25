import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import CRUD from './CRUD.js';
import './custom.css';

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//         <div className="App">
//           <CRUD />
//         </div>
//     );
//   }
// }

function App(){
  return (
    <div className="App">
      <CRUD />
    </div>
  );
}
