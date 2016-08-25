import React from 'react';
import {Component, PropTypes} from 'react';
import CatActionCreators from '../actions/CatActionCreators.react.js'
import CatStore from '../stores/CatStore.react.js'

import CatList from './CatList.react.js'
import NewCatForm from './NewCatForm.react.js'

module.exports = class Application extends React.Component {
  constructor() {
    super();
    CatActionCreators.catsIndex();
    this.state = {cats: [], isCreating: false}
  }

  componentDidMount() {
    CatStore.addChangeListener(this.onCatsChange);
  }

  componentWillUnmount() {
    CatStore.removeChangeListener(this.onCatsChange);
  }

  onCatsChange = () => {
    let cats = CatStore.getAll();
    let isCreating = CatStore.getIsCreating();
    this.setState({cats: cats, isCreating: isCreating});
  }

   toggleCreating = () => {
    this.setState({cats: this.state.cats, isCreating: !this.state.isCreating})
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <CatList cats={this.state.cats}/>
        </div>
        <div className="col-md-8 col-md-offset-2">
          <NewCatForm isCreating={this.state.isCreating} toggleCreating={this.toggleCreating}/>
        </div>
      </div>
    )
  }
}