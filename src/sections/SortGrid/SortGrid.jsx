import React from 'react';
import { FaGripHorizontal, FaGripVertical, FaGripLinesVertical, FaGripLines } from 'react-icons/fa';
import './SortGrid.css';


const SortGrid = () => {
  return (
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sort By:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <FaGripHorizontal />
                    <FaGripVertical />
                    <FaGripLinesVertical />
                    <FaGripLines />
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default SortGrid;