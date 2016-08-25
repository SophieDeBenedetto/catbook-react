import React from 'react';
import {Component, PropTypes} from 'react';
import CatList from './CatList.react.js'
import NewCatForm from './NewCatForm.react.js'

module.exports = class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <CatList />
        </div>
        <div className="col-md-8 col-md-offset-2">
          <NewCatForm />
        </div>
      </div>
    )
  }
}