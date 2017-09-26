import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/styles.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "./CreatePost";
import BaseLayout from "./BaseLayout";
import PostList from "./PostList";
import ShowPost from "./ShowPost";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/createpost" component={CreatePost}></Route>
              <Route path="/posts/:id" component={ShowPost}></Route>
              <Route path="/posts" component={PostList}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
