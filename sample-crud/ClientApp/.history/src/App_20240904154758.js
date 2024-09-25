import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.js';
import CRUD from './CRUD.js';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <div className="App">
          <CRUD />
        </div>
      </Layout>
    );
  }
}
