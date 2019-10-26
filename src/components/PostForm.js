import React from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {createPost} from '../actions/index'

class PostForm extends React.Component{
    state = {
        title: '',
        body: ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
       e.preventDefault();
       const post = {
        title: this.state.title,
        body: this.state.body
      };
        this.props.createPost(post)
    }

  render () {
    return (
      <div className="Post-Form">
          <form onSubmit={this.onSubmit}>
              <div className="input-wrapper">
                  <label> Title: </label> <br/>
                  <input 
                    onChange={this.onChange}
                    value={this.state.title} 
                    name="title"/>
              </div>
              <div className="input-wrapper">
                  <label> Body:</label> <br/>
                  <textarea 
                    onChange={this.onChange}
                    value={this.state.body}
                    name="body"/>
              </div>
              <div className="btn-submit">
                  <button type="submit" className="post-btn"> Submit </button>
              </div>
          </form>
      </div>
    )
  }
}

export default connect(null, {createPost})(PostForm);