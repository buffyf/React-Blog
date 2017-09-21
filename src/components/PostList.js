import React, { Component } from 'react';
import ShowPost from "./ShowPost";

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }

    };

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
            console.log("state", this.state.blogs);
        })
    }
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ blogs: data });
        })
    }


    render() {
        let posts = this.state.posts;
        return (
            <div>
                <form onSubmit={this.fetchData}>
                    <button type="submit">Update List</button>
                </form>
                <ShowPost posts={posts} />
            </div>
        )
    }
}
