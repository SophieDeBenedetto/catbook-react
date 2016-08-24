import React from 'react';
import {Component, PropTypes} from 'react';
import CatList from './CatList.react.js'

module.exports = class Application extends React.Component {
  render() {
    return <CatList />
  }
}