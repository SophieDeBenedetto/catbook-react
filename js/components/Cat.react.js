import React from 'react';
import {Component, PropTypes} from 'react';

module.exports = class Cat extends React.Component {
  render() {
    debugger;
    return <div>Hello {this.props.cat}</div>;
  }
}