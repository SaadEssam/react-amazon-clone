import React from 'react';
import { Link } from 'react-router-dom';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { images } from '../../constants';
import './SingleBlog.css';

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-article">
                <Link to="/blogs">← Go back to Blogs</Link>
                <h3 className="title">How To Choose The Right Sound System</h3>
                <img src={images.blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                The all-too-seductive urge here, of course, 
                would be to head over to our Awards section, 
                research the most expensive Award-winner you can afford, 
                and buy them. After all, if it’s the best we think you can buy 
                at that price, doesn’t it follow that it’s the best for you? Some 
                of you might strike gold. Some of you will be able to do exactly 
                that and the speakers will slot straight into your system without 
                any problems. But it's always worth doing plenty of research before 
                you buy, and considering certain things while you're auditioning pairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;