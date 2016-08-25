import AppDispatcher from '../dispatcher/AppDispatcher.react.js'
import CatConstants from '../constants/CatConstants.js'

module.exports = {

  receiveCatIndex: function(response) {
    AppDispatcher.handleServerAction({
      actionType: CatConstants.HANDLE_CATS_INDEX,
      response: response
    });
  },

  receiveCreateCatResponse: function(response) {
    AppDispatcher.handleServerAction({
      actionType: CatConstants.CAT_CREATED,
      cat: response
    })
  },

  receiveAPIError: function(err) {
    AppDispatcher.handleServerAction({
      actionType: 'API_ERROR',
      response: err
    })
  }
};