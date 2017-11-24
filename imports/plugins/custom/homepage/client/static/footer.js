import React, { Component } from "react";
import { getComponent, replaceComponent } from "/imports/plugins/core/components/lib";
import classnames from "classnames";

class FooterPlus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-footer">
        <div className="footer content">
          <div className="footer-logo">
            <img src="resources/footer_logo.png" alt="" width="201" height="24"/>
          </div>
          <div className="footer-social">
            <a href="https://twitter.com/IceMachinesPlus" className="fs-tw"></a>
            <a href="https://www.facebook.com/Ice-Machines-Plus-279530988794449/" target="_blank" className="fs-fb"></a>
            <a href="https://plus.google.com/108308410792218208226/" target="_blank" className="fs-gp"></a>
            <a href="https://www.youtube.com/user/IceMachinesPlusVideo" target="_blank" className="fs-yt"></a>
          </div>
          <div className="footer-links-new">
            
            <div className="footer-links-new-top">
              
              <div className="footer-links-new-bottom-toggle">IceMachinesPlus</div>
              <ul className="footer-links-new-top-ul footer-links-new-bottom-ul">
                <li><a href="/about-us">About IceMachinesPlus</a></li>
                <li><a href="/product-reviews">Product Reviews</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/employment-opportunities">Employment Applications</a></li>
                <li><a href="/sitemap/">Sitemap</a></li>  
                <li><a href="/blog/">Blog</a></li>  
                <li><a href="/contacts/">Contact Us</a></li>
                <li><a href="http://www.bbb.org/connecticut/business-reviews/restaurant-equipment-and-supplies/ice-machines-plus-inc-in-hartford-ct-87117917/" target="_blank">BBB Business Review</a></li>
              </ul>
            
            </div>
            
            
            <div className="footer-links-new-bottom">
              
              <div className="footer-links-new-bottom-toggle">Policies</div>
              <ul className="footer-links-new-bottom-ul">
                <li><a href="/security">Security Policy</a></li>
                <li><a href="/shipping-delivery-options">Shipping &amp; Delivery</a></li>
                <li><a href="/payment-methods">Payment Methods</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
              
            
            </div>
            

          </div><div className="block newsletter">
              <div className="title"><strong>Subscribe for news</strong></div>
              <div className="sub-title">Enter your e-mail and be in touch</div>
              <div className="content">
                  <form className="form subscribe" noValidate="novalidate" action="http://dev.icemachinesplus.com/newsletter/subscriber/new/" method="post" id="newsletter-validate-detail">
                      <div className="field newsletter">
                          <label className="label" htmlFor="newsletter"><span>Sign Up for Our Newsletter:</span></label>
                          <div className="control">
                              <input name="email" type="email" id="newsletter" placeholder="E-mail" data-validate="{required:true, 'validate-email':true}"/>
                          </div>
                      </div>
                      <div className="actions">
                          <button className="action subscribe primary" title="Subscribe" type="submit">
                              <span>Subscribe</span>
                          </button>
                      </div>
                  </form>
              </div>
            </div>
          </div>
      </div>
    ); 
  }
}

replaceComponent("Footer", FooterPlus);

