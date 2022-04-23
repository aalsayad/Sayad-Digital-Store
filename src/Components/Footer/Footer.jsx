import { useState } from "react";
import "./footer.styles.scss";
import categoriesData from "../Category/categoriesData";
import FooterSection from "./FooterSection";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 935 ? true : false);

  return (
    <div className="footer">
      <div className="footer-content">
        <FooterSection
          title="shop"
          data={categoriesData}
          displaytitle={true}
          animatable={true}
          defaultopen={true}
        />
        <FooterSection
          title="contact"
          displaytitle={true}
          animatable={true}
          defaultopen={!isMobile}
        >
          <ul>
            <li>Get in touch</li>
            <li>Report a problem</li>
          </ul>
        </FooterSection>
        <FooterSection
          title="account"
          displaytitle={true}
          animatable={true}
          defaultopen={!isMobile}
        >
          <ul>
            <li>Login to your account</li>
            <li>Create a new account</li>
          </ul>
        </FooterSection>
        <FooterSection
          title="socials"
          displaytitle={true}
          animatable={true}
          defaultopen={!isMobile}
        >
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Tiktok</li>
          </ul>
        </FooterSection>
        <FooterSection title="copyright" displaytitle={false} animatable={false}>
          <h5>© 2022 Sayad Store, Inc. All Rights Reserved</h5>
        </FooterSection>
        <FooterSection title="creator" displaytitle={false} animatable={false}>
          <h5>
            Designed & Developed by <span>sayad.design</span>
          </h5>
        </FooterSection>
      </div>
    </div>
  );
};

export default Footer;
