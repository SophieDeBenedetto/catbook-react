import React from 'react'
import {Component, PropTypes} from 'react';
import CatStore from '../stores/CatStore.react.js'
import CatActionCreators from '../actions/CatActionCreators.react.js'
import Cat from './Cat.react.js'

module.exports = class NewCatForm extends React.Component {
  constructor() {
    super();
    this.state = {cat: {}}
  }

  getCat = () => {
    return this.state.cat;
  }

  onNameInputChange = (event) => {
    let nameInputValue = event.target.value
    this.updateCat({name: nameInputValue})
  }

  onBreedInputChange = (event) => {
    let breedInputValue = event.target.value;
    this.updateCat({breed: breedInputValue})
  }

  onTemperamentInputChange = (event) => {
    let temperamentInputValue = event.target.value; 
    this.updateCat({temperament: temperamentInputValue})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let cat = this.getCat();
    CatActionCreators.saveCat(cat);
  }

  updateCat = (attribute) => {
    let cat = this.state.cat
    let attr = Object.keys(attribute)[0]
    cat[attr] = attribute[attr]
    this.setState({cat: cat})
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
       <h4>New Cat</h4>
        <div className="form-group">
          <br />
          <input 
            className="form-control" 
            value={this.state.inputNameValue}
            placeholder='name'
            onChange={this.onNameInputChange} />
          <br />
          <input 
            className="form-control" 
            placeholder='breed'
            value={this.state.inputBreedValue}
            onChange={this.onBreedInputChange} />
          <br />
          <input 
            className="form-control" 
            placeholder='temperament'
            value={this.state.inputTemperamentValue}
            onChange={this.onTemperamentInputChange} />
            <br />
          <input type="Submit" value="submit" className="btn btn-default" />
        </div>
      </form>
    )
    
  }
}



