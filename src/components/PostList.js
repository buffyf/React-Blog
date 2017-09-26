import React, { Component } from 'react';
// import ShowPost from "./ShowPost";
import { Link } from "react-router-dom";



export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }

    };

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            console.log('data: ', data);
            this.setState({ posts: data });
        })
    }

    render() {
        let posts = this.state.posts.map((post, index) => {

            return (
                <div className="container">
                    <div key={index} className="bg-faded p-4 my-4">
                        <div className="card card-inverse">
                            <div className="card-img-overlay bg-overlay">
                                <h2 className="card-title text-shadow text-white text-uppercase mb-0">
                                    <Link to={"/posts/" + post._id}>
                                        <p className="link">{post.blogTitle}</p>
                                    </Link>
                                </h2>
                                <h2 className="blog-text lead text-shadow text-white text-uppercase mb-0">Written By: {post.authorName}</h2>
                                <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">"{post.blogEntry}"</p>
                            </div>
                        </div>
                    </div>
                </div>

            )
        });

        return (
            <div className="">
                {posts}
            </div>
        )
    }
}
