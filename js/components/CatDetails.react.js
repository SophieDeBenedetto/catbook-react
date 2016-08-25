import React from 'react';
import {Component, PropTypes} from 'react';

module.exports = class CatDetails extends React.Component {
  render() {
    return (
      <div>
        <p>breed: {this.props.cat.breed}</p>
        <p>weight: {this.props.cat.weight}</p>
        <p>temperament: {this.props.cat.temperament}</p>
      </div>
    )
  }
}