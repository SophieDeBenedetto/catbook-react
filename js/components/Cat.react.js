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
      <div>
        <li onClick={this.showDetails} className="col-md-12 list-group-item">
          <h4>{cat.name}</h4>
          <div style={styleType} className="col-md-12">
            <CatDetails cat={cat} />
            <HobbyList hobbies={cat.hobbies} />
          </div>
        </li>
      </div>
    )

  }
}