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
            <div className="bg-faded p-4 my-4">
                <hr className="divider" />
                <h2 className="text-center text-lg text-uppercase my-0">Write A Message</h2>
                <hr className="divider" />
                <form onSubmit={this.createPost}>
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label className="text-heading">Name</label>
                            <input name="authorName" type="text" value={authorName} onChange={this.handleInputChange} className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label className="text-heading">Title</label>
                            <input name="blogTitle" type="text" value={blogTitle} onChange={this.handleInputChange} className="form-control" />
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group col-lg-12">
                            <label className="text-heading">Message</label>
                            <textarea name="blogEntry" type="text" value={blogEntry} onChange={this.handleInputChange} className="form-control" rows="6"></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}