import React from 'react';
import {Component, PropTypes} from 'react';
import CatDetails from './CatDetails.react.js'


var hidden = {
  display: 'none'
}

module.exports = class Cat extends React.Component {
  constructor() {
    super();
    this.state = {showDetails: false}
  }

  showDetails = () => {
    this.setState({showDetails: !this.state.showDetails})
    console.log(this.state.showDetails)
  }

  render() {
    var styleType = this.state.showDetails ? {} : hidden
    var cat = this.props.cat
    debugger;
    return (
      <div onClick={this.showDetails}>
        Hello {cat.attributes.name}
        <div style={styleType}>
          <p>
            breed: {cat.attributes.breed}
          </p>
          <p>
            weight: {cat.attributes.weight}
          </p>
          <p>
            temperament: {cat.attributes.temperament}
          </p>
        </div>
      </div>
    )

  }
}