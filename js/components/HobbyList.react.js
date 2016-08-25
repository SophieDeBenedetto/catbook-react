import React from 'react'
import {Component, PropTypes} from 'react';
import Hobby from './Hobby.react.js'

module.exports = class CatList extends React.Component {  
  hobbyElement = (hobby) => {
    return <Hobby hobby={hobby} />
  }

  render() {
    if (this.props.hobbies.length === 0) {
      return (
        <p>This cat has no hobbies...except sleeping...zzzzz</p>
      )
    } else {
      var hobbyList = this.props.hobbies.map(this.hobbyElement)
      return (
        <div>
          <h4>hobbies:</h4>
          <ul>
            {hobbyList}
          </ul>
        </div>
      )
    }
  }
}

