import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  // Async Await
  // async componentDidMount() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();
  //   this.setState({ posts: data });
  // }

  // Async Await with Fetch and try catch
  // async componentDidMount() {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     this.setState({ posts: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
