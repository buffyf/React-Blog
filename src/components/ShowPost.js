import React, { Component } from 'react'

export default class ShowPost extends Component {

    render() {
        let posts;
        posts = this.props.posts.map((post, index) => {


            return (
                <div key={index}>
                    <p>Author Name: {post.authorName}</p>
                    <p>Blog Title: {post.blogTitle}</p>
                    <p>Blog Entry: {post.blogEntry}</p>
                </div>
            )
        })
        return (
            <div>
                {posts}
            </div>
        );
    }
}
