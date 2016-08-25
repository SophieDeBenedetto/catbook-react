import React from 'react';
import {Component, PropTypes} from 'react';
import CatDetails from './CatDetails.react.js'
import HobbyList from './HobbyList.react.js'


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
    return (
      <div onClick={this.showDetails}>
        Hello {cat.name}
        <div style={styleType}>
          <CatDetails cat={cat} />
          <div>
            <HobbyList hobbies={cat.hobbies} />
          </div>
        </div>
      </div>
    )

  }
}