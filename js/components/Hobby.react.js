import React from 'react'
import {Component, PropTypes} from 'react';

module.exports = class CatList extends React.Component {  
  
  render() {
    return (
      <li>
        {this.props.hobby.name}
      </li>
    )
  }
}

