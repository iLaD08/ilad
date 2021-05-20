import React from "react";
import Contact from "../../components/contact/index";
import BottomLinks from "../../components/bottom-links/index";

const ContactPage = () => {
  React.useEffect(() => (document.title = "iLaD | Contact"), []);

  return (
    <div className='Contact'>
      <Contact />
      <BottomLinks />
    </div>
  );
};

export default ContactPage;
