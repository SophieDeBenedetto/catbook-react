import ServerActionCreators from '../actions/ServerActionCreators.react.js'


module.exports = {

  get(url) {
    $.ajax({
      url: url,
      success: function(data) {
        ServerActionCreators.receiveData(data);
      },
      error: function(xhr, status, err) {
        ServerActionCreators.receiveAPIError({ err: err });
      }
    })
  }
}

