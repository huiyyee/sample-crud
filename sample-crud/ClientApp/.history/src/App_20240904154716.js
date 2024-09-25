import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout.js';
import CRUD from './CRUD';
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
