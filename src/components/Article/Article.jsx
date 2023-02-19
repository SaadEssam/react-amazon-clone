import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


const Article = ({ image, date, title }) => {
  return (
    <div className="app_blog-container_article rounded-3">
      <div className="app_blog-container_article-image rounded-3">
        <img src={image} alt="blog" />
      </div>
      <div className="app_blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <Link to="/blog/:id" >Read More →</Link>
      </div>
    </div>
  );
}

export default Article;