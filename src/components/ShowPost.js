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
            <div className="container">
                <div className="bg-faded p-4 my-4">
                    <div className="card card-inverse">
                        <div className="card-img-overlay bg-overlay">
                            <h2 className="card-title text-shadow text-white text-uppercase mb-0">
                                {this.state.post.blogTitle}</h2>
                            <h2 className="blog-text lead text-shadow text-white text-uppercase mb-0">Written By: {this.state.post.authorName}</h2>
                            <p className="blog-text lead card-text text-shadow text-white w-50 d-none d-lg-block">"{this.state.post.blogEntry}"</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

