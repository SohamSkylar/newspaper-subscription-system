import React from 'react'
import './ContactUsCSS.css'

const ContactUs = () => {

  const styleBg = {backgroundColor: "#17252A"}
  const styleCol = {color: "#17252A"}
    return (
        <>
            <div className="contact_us_green" style={{...styleBg}}>
  <div className="responsive-container-block big-container">
    <div className="responsive-container-block container">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
        <form className="form-box">
          <div className="container-block form-wrapper">
            <div className="head-text-box">
              <p className="text-blk contactus-head font-face-bwr">
                Contact us
              </p>
              <p className="text-blk contactus-subhead font-face-bwl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al iqua. Ut enim
              </p>
            </div>
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                <p className="text-blk input-title font-face-bwr">
                  First Name
                </p>
                <input className="input" id="ijowk-6" name="FirstName"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title font-face-bwr">
                  Last Name
                </p>
                <input className="input" id="indfi-4" name="Last Name"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title font-face-bwr">
                  E-Mail
                </p>
                <input className="input" id="ipmgh-6" name="Email"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title font-face-bwr">
                  Phone Number
                </p>
                <input className="input" id="imgis-5" name="PhoneNumber"/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                <p className="text-blk input-title font-face-bwr">
                  What do you have in mind ?
                </p>
                <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
              </div>
            </div>
            <div className="btn-wrapper font-face-bwl">
              <button className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
        <div className="container-box">
          <div className="text-content">
            <p className="text-blk contactus-head font-face-bwr">
              Contact us
            </p>
            <p className="text-blk contactus-subhead font-face-bwl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al iqua. Ut enim
            </p>
          </div>
          <div className="workik-contact-bigbox">
            <div className="workik-contact-box">
              <div className="phone text-box">
                <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"/>
                <p className="contact-text font-face-bwr">
                  +91 12 3258 5679
                </p>
              </div>
              <div className="address text-box">
                <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"/>
                <p className="contact-text font-face-bwr">
                  paperportal@mail.com
                </p>
              </div>
              <div className="mail text-box">
                <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"/>
                <p className="contact-text font-face-bwr">
                  Roynagar Street, Kolkata 700104
                </p>
              </div>
            </div>
            <div className="social-media-links">
              <a href="">
                <img className="social-svg" id="is9ym" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
              </a>
              <a href="">
                <img className="social-svg" id="i706n" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
              </a>
              <a href="">
                <img className="social-svg" id="ib9ve" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
              </a>
              <a href="">
                <img className="social-svg" id="ie9fx" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ContactUs