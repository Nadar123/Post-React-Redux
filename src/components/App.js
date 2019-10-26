import React from 'react';
import './style.scss';

import Posts from './Posts';
import PostForm from './PostForm'

class App extends React.Component{


  render () {
    return (
      <div className="app-wrapper">
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    )
  }
}

export default App;
