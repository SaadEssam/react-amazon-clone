import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SideBar from "../../sections/SideBar/SideBar";
import "./OurStore.css";
import SortGrid from "../../sections/SortGrid/SortGrid";

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <SideBar />
            <SortGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
