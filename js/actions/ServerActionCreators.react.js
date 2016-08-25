import AppDispatcher from '../dispatcher/AppDispatcher.react.js'
import CatConstants from '../constants/CatConstants.js'

module.exports = {

  receiveData: function(response) {
    AppDispatcher.handleServerAction({
      actionType: CatConstants.CATS_INDEX,
      response: response
    });
  },
};