import React from 'react'
import {Component, PropTypes} from 'react';
import CatStore from '../stores/CatStore.react.js'
import CatActionCreators from '../actions/CatActionCreators.react.js'
import Cat from './Cat.react.js'

module.exports = class CatList extends React.Component {
  constructor() {
    super();
    CatActionCreators.catsIndex();
    this.state = {cats: []}
  }

  componentDidMount() {
    CatStore.addChangeListener(this.onCatsChange);
  }

  // componentWillUnmount() {
  //   TweetStore.removeChangeListener(this.onTweetChange);
  // }

  onCatsChange = () => {
    this.setState({cats: CatStore.getAll()});
  }

  // getCat(catId) {
  //   var tweet = this.props.tweets[tweetId];
  //   var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
  //   var tweetElement;
  //   if (handleRemoveTweetFromCollection) {
  //     tweetElement = (
  //       <Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />
  //     );
  //   } else {
  //     tweetElement = <Tweet tweet={tweet} />
  //   }

  //   return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
  // }, 

  catElement = (cat) => {
    debugger;
    return <Cat cat={cat.id} />
  }

  render() {
    let cats = this.state.cats
    if (cats.length === 0) {
      return (
        <h1>HI</h1>
      )
    } else {
      var catList = this.state.cats.data.map(this.catElement)
      return (
        <ul>
          {catList}
        </ul>
      )
      // var tweetElements = this.getListofTweetIds().map(this.getTweetElement);
      // return (
      //   <ul style={listStyle}>
      //     {tweetElements}
      //   </ul>
      // );
      // }
    }
  }
}

// var TweetList = React.createClass({
//   getListofTweetIds: function () {
//     return Object.keys(this.props.tweets)
//   }, 

//  getInitialState: function () {
//     return {
//       tweet: TweetStore.getTweet()
//     }
//   },

//   componentDidMount: function () {
//     TweetStore.addChangeListener(this.onTweetChange);
//   },

//   componentWillUnmount: function () {
//     TweetStore.removeChangeListener(this.onTweetChange);
//   },

//   onTweetChange: function () {
//     this.setState({
//       tweet: TweetStore.getTweet()
//     })
//   },

//   render: function () {
//     var tweet = this.state.tweet;
//     if (tweet) {
//       return (<StreamTweet tweet={tweet} />);
//     }

//     return (
//       <Header text="Waiting for public photos from Twitter..." />
//     );
//   }
// });

