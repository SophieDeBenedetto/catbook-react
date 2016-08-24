// Todo actions
import AppDispatcher from '../dispatcher/AppDispatcher.react.js'
import CatConstants from '../constants/CatConstants.js'
import AppAPI from '../utils/AppAPI.react.js'

module.exports = {

  catsIndex: function() {
    AppAPI.get('http://localhost:5000/api/v1/cats')
  }

  // addItem: function() {
  //   AppDispatcher.handleViewAction({
  //     actionType: TodoConstants.NEW_ITEM
  //   });
  // },

  // saveItem: function(text) {
  //   AppDispatcher.handleViewAction({
  //     actionType: TodoConstants.SAVE_ITEM,
  //     text: text
  //   });
  // },

  // removeItem: function(index) {
  //   AppDispatcher.handleViewAction({
  //     actionType: TodoConstants.REMOVE_ITEM,
  //     index: index
  //   });
  // },

  // getRandom: function() {
  //   AppDispatcher.handleViewAction({
  //     actionType: TodoConstants.GET_RANDOM
  //   });
    
  //   RandomUserAPI.get();
  // }

};