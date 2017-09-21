import React, { Component } from 'react'


export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {

            authorName: '',
            blogTitle: '',
            blogEntry: '',


        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createPost = (e) => {
        e.preventDefault();
        this.setState({ authorName: e.target.value, blogTitle: e.target.value, blogEntry: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ authorName: '', blogTitle: '', blogEntry: '' });
    }

    render() {
        let { authorName, blogTitle, blogEntry } = this.state;
        return (
            <div>
                <form onSubmit={this.createPost}>
                    <div>
                        <input name="authorName" type="text" value={authorName} placeholder="Name" onChange={this.handleInputChange} />
                        <input name="blogTitle" type="text" value={blogTitle} placeholder="Title" onChange={this.handleInputChange} />
                        <textarea name="blogEntry" type="text" value={blogEntry} placeholder="Blog Here" onChange={this.handleInputChange} ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}