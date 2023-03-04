import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./Blogs.css";
import Blog from "../../sections/Blog/Blog";

const Blogs = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <Blog />
    </>
  );
};

export default Blogs;
