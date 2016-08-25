import ServerActionCreators from '../actions/ServerActionCreators.react.js'


module.exports = {

  get(url) {
    $.ajax({
      url: url,
      success: function(data) {
        ServerActionCreators.receiveCatIndex(data);
      },
      error: function(xhr, status, err) {
        ServerActionCreators.receiveAPIError({ err: err });
      }
    })
  },

  post(url, data) {
    $.ajax({
      url: url, 
      dataType: 'json',
      type: 'POST', 
      data: {cat: data},
      success: function(data) {
        ServerActionCreators.receiveCreateCatResponse(data);
      },
      error: function(xhr, status, err) {
        ServerActionCreators.receiveAPIError({err: err})
      }
    })
  }
}

