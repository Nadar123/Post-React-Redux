import React from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'

class Posts extends React.Component{

  componentDidMount () {
    this.props.fetchPosts()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
       <div key={post.id} className="title-post">
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts}) (Posts);