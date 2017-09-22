import React, { Component } from 'react'
// import { Link } from "react-router-dom";


export default class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                blogTitle: ""
            }
        }
    }

    componentWillMount() {
        // get the post id from the url params
        // fetch the post from the db. 
        // set it to state.post

        // const { postId } = this.props.match.params;


        const { id } = this.props.match.params;
        const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
        fetch(URL)
            .then(results => {
                return results.json();
            }).then(data => {
                console.log('data: ', data);
                this.setState({ post: data });

            })
    }
    render() {
        return (
            <div>

                <h3> {this.state.blogTitle ? this.state.blogTitle : "LOADING"}</h3>
                <p>Author Name: {this.state.post.authorName}</p>

                <p>Blog Title: {this.state.post.blogTitle}</p>

                <p>Blog Entry: {this.state.post.blogEntry}</p>
            </div>
        );
    }
}

