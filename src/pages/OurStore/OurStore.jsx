import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SideBar from "../../sections/SideBar/SideBar";
import './OurStore.css';

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <SideBar />
    </>
  );
}

export default OurStore;