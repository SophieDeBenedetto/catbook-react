import React from 'react';
import {Component, PropTypes} from 'react';

module.exports = class Cat extends React.Component {
  render() {
    return <div>Hello {this.props.cat.attributes.name}</div>;
  }
}