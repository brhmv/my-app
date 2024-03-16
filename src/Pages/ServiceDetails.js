import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ServiceDetails from '../components/Service/ServiceDetails';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import DarkSoftwareService from '../components/Service/DarkSoftwareService';

const Faq = () => {
    return (
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Services Details" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!" /> */}

            <ServiceDetails />



            <DarkSoftwareService />

            <Footer FooterData={FooterData} />
        </div>
    )
}
export default Faq;