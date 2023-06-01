import React from "react";
import style from "./ContactUs.module.css";


function ContactUs() {
  return (
    <div>
      <div className={style.banner}>
        <div className={style.post}>
          <div className="container">
            <div className="row justify-content-evenly align-items-center">
              <div className="col-md-6">
                <div className={style.bannerTextIner}>
                  <div className={style.bannerText}>
                    <h1 className="text-center">
                      <span className={style.headingColor}>CONTACT US</span>
                    </h1>
                    <p className="text-center text-white mt-5 fs-4">
                      Need an expert? you are more than welcomed to leave your
                      contact info and we will be in touch shortly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row">
              <div className="col-md-6">
                <h3>
                  <span className={style.headingColor2}>
                    GET IN TOUCH WITH US
                  </span>
                </h3>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>+923027927022</span>
                    </h3>
                    <p className="text-muted">
                      Please feel free to contact us for any inquiry
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                    <i class="bi bi-whatsapp"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>+923027927022</span>
                    </h3>
                    <p className="text-muted">
                      For inquiries or orders, kindly whatsapp call or message
                      us
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                    <i class="bi bi-envelope"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>
                        munawar7927@gmail.com
                      </span>
                    </h3>
                    <p className="text-muted">
                      Please contact us using the above Email or send us
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                    <i class="bi bi-geo-alt"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>
                        Office No.datic AI
                      </span>
                    </h3>
                    <p className="text-muted">
                      Please feel free to contact us for any inquiry
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>
                  <span className={style.headingColor2}>Freelance Profile</span>
                </h3>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                    <i class="bi bi-telephone-fill"></i>

                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>UP Work</span>
                    </h3>
                    <p className="text-muted">
                      We are on upwork.com Please click to visit our profile
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>FreeLancer</span>
                    </h3>
                    <p className="text-muted">
                      We are on Freelancer.com Please click to visit our profile
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                    <i class="bi bi-telephone-fill"></i>
                      
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>
                        People Per Hour
                      </span>
                    </h3>
                    <p className="text-muted">
                      We are on peopleperhour.com Please click to visit our
                      profile
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.icon}>
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>
                      <span className={style.headingColor2}>Fiverr</span>
                    </h3>
                    <p className="text-muted">
                      We are on fiverr.com Please click to visit our profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <h3 className="text-center">
            <span className={style.headingColor2}>CONTACT WITH US</span>
          </h3>
          <div className="row mt-4 justify-content-center">
            <div className="col-2">
              <div className={style.iconSocial}>
              <i class="bi bi-facebook"></i>
              </div>
            </div>
            <div className="col-2">
              <div className={style.iconSocial}>
              <i class="bi bi-linkedin"></i>
              </div>
            </div>
            <div className="col-2">
              <div className={style.iconSocial}>
              <i class="bi bi-youtube"></i>
              </div>
            </div>
            <div className="col-2">
              <div className={style.iconSocial}>
              <i class="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
