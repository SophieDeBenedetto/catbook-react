import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.react.js';
import CatConstants from '../constants/CatConstants';



const CHANGE_EVENT = 'change';
var cats = [];

function setCats(catsPayload) {
  cats = catsPayload;
}

function emitChange() {
  myStore.emit(CHANGE_EVENT)
}

class CatStore extends EventEmitter {

  constructor() {
    super();
    this.cats = cats;
  }

  getAll() {
    return cats;
  }

  onChange(listener, context) {
    this.on(CHANGE_EVENT, listener, context);
  } 

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

const myStore = new CatStore();

CatStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.action.actionType) {

  case CatConstants.CATS_INDEX:
    setCats(action.action.response)
    // myStore.getAll();
    emitChange();
    break;
  default:
    return;
  }

});

export default myStore;





