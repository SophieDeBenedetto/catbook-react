import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.react.js';
import CatConstants from '../constants/CatConstants';
import AppAPI from '../utils/AppAPI.react.js'

const CHANGE_EVENT = 'change';
var cats = [];
var error = {};
var isCreating = false

function setCats(catsPayload) {
  cats = catsPayload;
}

function addCat(cat) {
  cats.push(cat);
}

function setError(err) {
  error = err;
}

function finishCreating() {
  isCreating = false
}

function emitChange() {
  catStore.emit(CHANGE_EVENT)
}

class CatStore extends EventEmitter {

  constructor() {
    super();
    this.cats = cats;
  }

  getCatsFromAPI() {
    AppAPI.get('http://localhost:5000/api/v1/cats')
  }

  getAll() {
    return cats;
  }

  getIsCreating() {
    return isCreating;
  }

  createCat(cat) {
    AppAPI.post('http://localhost:5000/api/v1/cats', cat);
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

const catStore = new CatStore();

CatStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.action.actionType) {
  case CatConstants.CATS_INDEX:
    catStore.getCatsFromAPI();
    break;
  case CatConstants.HANDLE_CATS_INDEX:
    setCats(action.action.response)
    emitChange();
    break;
  case CatConstants.CAT_SAVE:
    catStore.createCat(action.action.cat);
    break;
  case CatConstants.CAT_CREATED:
    addCat(action.action.cat);
    finishCreating();
    emitChange();
    break;
  case 'API_ERROR':
    setError();
    emitChange();
    break;
  default:
    return;
  }

});

export default catStore;





