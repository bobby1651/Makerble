import React, { useState, useEffect } from "react";
import "./PostBox.css";
import logo from "../../assets/user.jpeg";
import postsData from "./Posts_Data.json"; // Import the JSON file

const PostBox = () => {
  const [posts, setPosts] = useState([]);

  // Load data from the imported JSON file
  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="PostBox" key={post.id}>
            <div className="Main_Post_body">
              <div className="Main_Post">
                <div>
                  <img className="avatar_img" src={logo} alt="avatar" />
                </div>
                <div className="Post_body">
                  <h2>{post.title}</h2>
                  <p>{post.message}</p>
                </div>
              </div>
              <div className="Time_Stamp">
                <p>about {post.timeAgo} ago</p>
              </div>
            </div>

            <div className="Stats">
              <div>
                <p>{post.likes} Likes</p>
              </div>
              <div className="left_sec">
                <p>{post.comments} comments</p>
                <p>{post.favs} favourites</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default PostBox;
