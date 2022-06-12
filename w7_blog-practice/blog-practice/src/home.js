import { useState } from "react";
import BlogList from "./blogList.js";
import { blog } from "./blogs.js";

const Home = () => {
  const [blogs, setBlogs] = useState(blog);

  //console.log(blogs);
  //console.log(blog);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
