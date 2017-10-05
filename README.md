React Router Blog
'Create a Blog application that uses React and React Router, and generates dynamic endpoints.'

To get started you will need to use create-react-app to quickly scaffold a project. You should migrate your components into a components folder in the src directory and the styles into a styles folder in the src directory. Link up all pages to make sure they working and test using npm run start in the console, use Ctrl+c to exit.

You will need use npm install --save react-router-dom in the terminal to save React Router 4 to your project dependencies and make it available for import.

In your index.js file, you will need to import { BrowserRouter, Route, Switch } from react-router-dom.

You should have a layout component that renders on all pages and is nested properly within the <BrowserRouter> component.

You should have the following separate components:

App.js
BaseLayout.js
CreatePost.js
PostList.js
ShowPost.js
Your app should mimic the functionality of the example provided at the end of this document.

You should be able to create a blog post using the tiny lasagna server for your fetch requests: https://tiny-lasagna-server.herokuapp.com/collections/blogger/.

After you create your post, you should be redirected to the main screen of all listed blogs.

You should be able to list all of the blog titles as <Link /> components and when you click on a title it should take you to a ShowPost component that dynamically renders with the blogs _id as an endpoint. You will need to use the match params object from React Router to do this. (see hints)

The final project should be a relatively attractive mock blogging website. The content and styling are up to you.

In the component lifecycle method generally associated with AJAX calls you should have the following code in your ShowPost component :
const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
The URL variable should be used to fetch the blog post with the _id that matches the endpoint.

You can use this.props.history.push('/'); at the end of a fetch in your .then() methods to push to a particular endpoint, such as /.

