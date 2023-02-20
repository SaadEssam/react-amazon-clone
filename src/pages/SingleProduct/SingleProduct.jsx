import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import ImageZoom from "react-image-zooom";
import { MdFavoriteBorder } from 'react-icons/md';
import { TbArrowsShuffle } from 'react-icons/tb';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Products from '../../sections/Products/Products';
import { images } from '../../constants';
import './SingleProduct.css';


const SingleProduct = () => {

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="product-image-wrapper">
                <div className="main-product-image">
                  <div>
                    <ImageZoom src={images.product01} alt="product" zoom="200"/>
                  </div>
                </div>
                <div className="second-product-image d-flex flex-wrap gap-15">
                  <div>
                    <ImageZoom src={images.product01a} alt="product" zoom="200"/>
                  </div>
                  <div>
                    <ImageZoom src={images.product01} alt="product" zoom="200"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price mb-0">$600</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 review-btn">( 2 Reviews )</p>
                  </div>
                  <a href="#review" className="text-dark text-decoration-underline review-btn">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">Type: </h6> 
                    <p className="product-data">Computer Desktop</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">Brand: </h6> 
                    <p className="product-data">Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">Categories: </h6> 
                    <p className="product-data">Computers & Laptop</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">Tags: </h6> 
                    <p className="product-data">Computers, Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">SKU: </h6> 
                    <p className="product-data">SKU001</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h6 className="product-heading">Availability: </h6> 
                    <p className="product-data text-success">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h6 className="product-heading">Storage: </h6> 
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">256 GB</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">512 GB</span>
                    </div>
                  </div>
                  <div className="d-flex gap-15 flex-row my-2 mb-3 align-items-center">
                    <h6 className="product-heading">Quantity: </h6>
                    <div>
                      <input 
                        type="number" 
                        name="" 
                        min={1} 
                        max={10} 
                        className="form-control quantity" 
                        id="" 
                        defaultValue={1}
                      />
                    </div> 
                    <div className="d-flex align-items-center gap-15">
                      <button className="buy-btn border-0 text-white" type="submit">Add to Cart</button>
                      <button className="buy-btn buy-it">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 mb-2">
                    <div>
                      <a href="" className="review-btn mb-0"><TbArrowsShuffle /> Add to Compare</a>
                    </div>
                    <div>
                      <a href="" className="review-btn mb-0"><MdFavoriteBorder /> Add to Wishlist</a>
                    </div>
                  </div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Shipping & Returns
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Materials
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Care Instructions
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 rounded-3">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 review-btn">Based on 7 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href="" className="text-dark text-decoration-underline review-btn">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="buy-btn border-0 text-white">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Michel</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default SingleProduct;