import React from "react";
import BottomLinks from "../../components/bottom-links/index";

const ContactPage = () => {
  React.useEffect(() => (document.title = "iLaD | Contact"), []);
  return (
    <div className="Contact">
      <iframe
        style={{
          display: "block",
          margin: "20px auto",
          overflow: "hidden",
          border: "none",
        }}
        src="https://docs.google.com/forms/d/e/1FAIpQLSft-euBoabPd0p8ZKyKBc0mpDHW2-o4PNqEIcN_nmz1IGg3xQ/viewform?embedded=true"
        title="Contact Form"
        scrolling="no"
        width="650"
        height="700"
      >
        Loading…
      </iframe>
      <BottomLinks />
    </div>
  );
};

export default ContactPage;
