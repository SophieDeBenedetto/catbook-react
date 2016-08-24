import React from 'react'
import {Component, PropTypes} from 'react';
import CatStore from '../stores/CatStore.react.js'
import CatActionCreators from '../actions/CatActionCreators.react.js'
import Cat from './Cat.react.js'

module.exports = class CatList extends React.Component {
  constructor() {
    super();
    CatActionCreators.catsIndex();
    this.state = {cats: []}
  }

  componentDidMount() {
    CatStore.addChangeListener(this.onCatsChange);
  }

  componentWillUnmount() {
    CatStore.removeChangeListener(this.onCatsChange);
  }

  onCatsChange = () => {
    this.setState({cats: CatStore.getAll()});
  }

  
  catElement = (cat) => {
    return <Cat cat={cat} />
  }

  render() {
    let cats = this.state.cats
    if (cats.length === 0) {
      return (
        <h1>HI</h1>
      )
    } else {
      var catList = this.state.cats.data.map(this.catElement)
      return (
        <ul>
          {catList}
        </ul>
      )
    }
  }
}

