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
      <form className="form-inline" onSubmit={this.handleFormSubmit}>
       <h4>New Cat</h4>
        <div className="form-group">
          <label>name</label>
          <input 
            className="form-control" 
            value={this.state.inputNameValue}
            onChange={this.onNameInputChange} />

            <label>breed</label>
          <input 
            className="form-control" 
            value={this.state.inputBreedValue}
            onChange={this.onBreedInputChange} />

            <label>Temperament</label>
          <input 
            className="form-control" 
            value={this.state.inputTemperamentValue}
            onChange={this.onTemperamentInputChange} />
          <input type="Submit" value="submit" />
        </div>
      </form>
    )
    
  }
}



