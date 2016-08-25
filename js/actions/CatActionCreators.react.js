import AppDispatcher from '../dispatcher/AppDispatcher.react.js'
import CatConstants from '../constants/CatConstants.js'
import AppAPI from '../utils/AppAPI.react.js'

module.exports = {

  catsIndex: function() {
    AppDispatcher.handleViewAction({
      actionType: CatConstants.CATS_INDEX
    })
  },


  saveCat: function(cat) {
    AppDispatcher.handleViewAction({
      actionType: CatConstants.CAT_SAVE,
      cat: cat
    });
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