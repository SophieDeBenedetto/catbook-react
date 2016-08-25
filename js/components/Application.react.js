import React from 'react';
import {Component, PropTypes} from 'react';
import CatList from './CatList.react.js'
import NewCatForm from './NewCatForm.react.js'

module.exports = class Application extends React.Component {
  render() {
    return (
      <div>
        <CatList />
        <NewCatForm />
      </div>
    )
  }
}