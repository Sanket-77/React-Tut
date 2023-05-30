import React, { Component } from "react";
import axios from "axios";

// HTTP GET Request ****************************************

class Tut21_HTTP_PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: " ",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default Tut21_HTTP_PostList;
