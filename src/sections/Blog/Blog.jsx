import React from 'react';
import './Blog.css';
import Article from '../../components/Article/Article';
import { data } from '../../constants';


const Blog = () => {
  return (
    <div className="blog py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">Our Latest Blogs</h3>
            <div className="app_blog" id="blog">
              <div className="app_blog-container">
                <div className="app_blog-container_groupB">
                  {data.blogs.map((blog, index) => (
                    <Article 
                      key={blog.title + index} 
                      title={blog.title} 
                      image={blog.image} 
                      date={blog.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;